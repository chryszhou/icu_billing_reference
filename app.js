(function(){
  var S = window.SITE || {};
  var esc = function(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");};

  // status -> badge class
  function badge(status){
    var s=(status||"").toUpperCase();
    var cls="neither", label=status||"—";
    if(/\bMCC\b/.test(s)) cls="mcc";
    else if(/\bCC\b/.test(s)) cls="cc";
    else if(/DRIVE|PROCEDURE|MV>96|PCS/.test(s)) cls="proc";
    else cls="neither";
    return '<span class="b '+cls+'">'+esc(label)+'</span>';
  }
  function money(n){return "$"+Math.round(n).toLocaleString();}

  /* ---------- Diagnoses by Organ System ---------- */
  function renderOrgan(){
    var host=document.getElementById("organ-tables");
    var sel=document.getElementById("organ-filter");
    // populate organ filter
    var opt='<option value="">All organ systems</option>';
    S.organ.forEach(function(s,i){opt+='<option value="'+i+'">'+esc(s.section)+'</option>';});
    sel.innerHTML=opt;

    var html="";
    S.organ.forEach(function(sec,i){
      html+='<div class="organ-block" data-i="'+i+'"><h3>'+esc(sec.section)+'</h3>';
      html+='<div class="tbl-wrap"><table><thead><tr><th class="code">ICD-10</th><th>Diagnosis</th><th>CC/MCC</th><th>Documentation tip</th></tr></thead><tbody>';
      sec.rows.forEach(function(r){
        var hay=(r.code+" "+r.name+" "+r.tip+" "+r.status).toLowerCase();
        html+='<tr data-hay="'+esc(hay)+'" data-st="'+esc((r.status||"").toUpperCase())+'">'+
          '<td class="code">'+esc(r.code)+'</td><td>'+esc(r.name)+'</td>'+
          '<td>'+badge(r.status)+'</td><td>'+esc(r.tip)+'</td></tr>';
      });
      html+='</tbody></table></div></div>';
    });
    host.innerHTML=html;
    filterOrgan();
  }
  function filterOrgan(){
    var q=(document.getElementById("organ-search").value||"").toLowerCase().trim();
    var st=document.getElementById("status-filter").value;
    var oi=document.getElementById("organ-filter").value;
    var shown=0;
    document.querySelectorAll("#organ-tables .organ-block").forEach(function(blk){
      var show=(oi===""||blk.getAttribute("data-i")===oi);
      blk.style.display=show?"":"none";
      if(!show) return;
      var any=0;
      blk.querySelectorAll("tbody tr").forEach(function(tr){
        var okq=!q||tr.getAttribute("data-hay").indexOf(q)>=0;
        var s=tr.getAttribute("data-st");
        var oks=true;
        if(st==="MCC") oks=/\bMCC\b/.test(s);
        else if(st==="CC") oks=/\bCC\b/.test(s)&&!/\bMCC\b/.test(s);
        else if(st==="NEITHER") oks=!/\bCC\b/.test(s)&&!/\bMCC\b/.test(s);
        var ok=okq&&oks;
        tr.style.display=ok?"":"none";
        if(ok){any++;shown++;}
      });
      blk.style.display=any?"":"none";
    });
    document.getElementById("organ-count").textContent=shown+" diagnoses shown";
  }

  /* ---------- DRG Value Ranking ---------- */
  var drgSort={key:"weight",dir:-1};
  function renderDRG(){
    var base=parseFloat(document.getElementById("baserate").value)||S.base;
    var rows=S.drg.slice();
    rows.sort(function(a,b){
      var k=drgSort.key, va=a[k], vb=b[k];
      if(k==="weight"){return (va-vb)*drgSort.dir;}
      va=(""+va).toLowerCase(); vb=(""+vb).toLowerCase();
      return (va<vb?-1:va>vb?1:0)*drgSort.dir;
    });
    var h='<table class="sortable"><thead><tr>'+
      '<th data-k="family">Condition family</th>'+
      '<th data-k="drg" class="code">DRG</th>'+
      '<th data-k="tier">Tier</th>'+
      '<th data-k="weight" class="num '+(drgSort.key==="weight"?"sortcol"+(drgSort.dir>0?" asc":""):"")+'">Rel. weight</th>'+
      '<th class="num">Approx. payment</th></tr></thead><tbody>';
    rows.forEach(function(r){
      h+='<tr><td>'+esc(r.family)+'</td><td class="code">'+esc(r.drg)+'</td><td>'+badge(r.tier)+'</td>'+
        '<td class="num">'+r.weight.toFixed(4)+'</td><td class="num">'+money(r.weight*base)+'</td></tr>';
    });
    h+='</tbody></table>';
    document.getElementById("drg-table").innerHTML='<div class="tbl-wrap">'+h+'</div>';
    document.querySelectorAll("#drg-table th[data-k]").forEach(function(th){
      th.addEventListener("click",function(){
        var k=th.getAttribute("data-k");
        if(drgSort.key===k) drgSort.dir*=-1; else {drgSort.key=k; drgSort.dir=(k==="weight"?-1:1);}
        renderDRG();
      });
    });
  }

  /* ---------- generic simple table ---------- */
  function simpleTable(hostId, rows, headers, keys){
    var h='<div class="tbl-wrap"><table><thead><tr>';
    headers.forEach(function(hd,i){h+='<th'+(keys[i]==="code"?' class="code"':'')+'>'+esc(hd)+'</th>';});
    h+='</tr></thead><tbody>';
    rows.forEach(function(r){
      h+='<tr>';
      keys.forEach(function(k){
        if(k==="status") h+='<td>'+badge(r[k])+'</td>';
        else h+='<td'+(k==="code"?' class="code"':'')+'>'+esc(r[k])+'</td>';
      });
      h+='</tr>';
    });
    h+='</tbody></table></div>';
    document.getElementById(hostId).innerHTML=h;
  }

  /* ---------- copy buttons ---------- */
  function wireCopy(){
    document.querySelectorAll(".copybtn").forEach(function(b){
      b.addEventListener("click",function(){
        var t=document.getElementById(b.getAttribute("data-target"));
        var txt=t.getAttribute("data-copy")||t.textContent;
        navigator.clipboard.writeText(txt).then(function(){
          var o=b.textContent; b.textContent="Copied!"; setTimeout(function(){b.textContent=o;},1400);
        });
      });
    });
  }

  /* ---------- scrollspy + mobile nav ---------- */
  function wireNav(){
    var links=[].slice.call(document.querySelectorAll(".sidebar nav a[href^='#']"));
    var secs=links.map(function(a){return document.getElementById(a.getAttribute("href").slice(1));}).filter(Boolean);
    function spy(){
      var pos=window.scrollY+120, cur=null;
      secs.forEach(function(s){if(s.offsetTop<=pos) cur=s.id;});
      links.forEach(function(a){a.classList.toggle("active",a.getAttribute("href")==="#"+cur);});
    }
    window.addEventListener("scroll",spy); spy();
    var sb=document.querySelector(".sidebar");
    var btn=document.getElementById("menubtn");
    if(btn) btn.addEventListener("click",function(){sb.classList.toggle("open");});
    links.forEach(function(a){a.addEventListener("click",function(){sb.classList.remove("open");});});
  }

  document.addEventListener("DOMContentLoaded",function(){
    renderOrgan();
    document.getElementById("organ-search").addEventListener("input",filterOrgan);
    document.getElementById("status-filter").addEventListener("change",filterOrgan);
    document.getElementById("organ-filter").addEventListener("change",filterOrgan);

    document.getElementById("baserate").value=S.base;
    document.getElementById("baserate").addEventListener("input",renderDRG);
    renderDRG();

    simpleTable("complex-table",S.complex,["Code","Condition","CC/MCC","Documentation tip"],["code","name","status","tip"]);
    simpleTable("cirrhosis-table",S.cirrhosis,["Decompensation","ICD-10","CC/MCC","Documentation tip"],["name","code","status","tip"]);
    simpleTable("maln-table",S.malnutrition,["Severity","ICD-10","CC/MCC","Notes"],["name","code","status","tip"]);
    simpleTable("trach-table",S.trachvent,["Item","Code","Type","Documentation tip"],["name","code","status","tip"]);

    wireCopy(); wireNav();
  });
})();
