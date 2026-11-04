const {chromium}=require('playwright');const V=process.argv[2]||'1';const D='/home/user/ifrs/book/build/v'+V;
(async()=>{const b=await chromium.launch();const p=await b.newPage();
await p.goto('file://'+D+'/book.html');
await p.pdf({path:D+'/book.pdf',format:'A4',margin:{top:'24mm',bottom:'24mm',left:'25mm',right:'25mm'},displayHeaderFooter:true,printBackground:true,
headerTemplate:'<div></div>',footerTemplate:'<div style="font-size:9px;width:100%;text-align:center;font-family:sans-serif;color:#555"><span class="pageNumber"></span></div>'});
await b.close();})();
