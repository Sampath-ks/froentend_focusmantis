// Basic drag-and-drop uploader behavior
(function(){
    function setupUploader(root){
      if(!root) return;
      const dropzone = root.querySelector('.dropzone');
      const input = root.querySelector('input[type="file"]');
      const browse = root.querySelector('[data-browse]');
  
      function preventDefaults(e){ e.preventDefault(); e.stopPropagation(); }
  
      ['dragenter','dragover','dragleave','drop'].forEach(eventName=>{
        dropzone.addEventListener(eventName, preventDefaults, false);
      });
  
      ['dragenter','dragover'].forEach(eventName=>{
        dropzone.addEventListener(eventName, ()=>dropzone.classList.add('active'));
      });
      ['dragleave','drop'].forEach(eventName=>{
        dropzone.addEventListener(eventName, ()=>dropzone.classList.remove('active'));
      });
  
      dropzone.addEventListener('drop', (e)=>{
        const dt = e.dataTransfer;
        if(!dt) return;
        input.files = dt.files;
        announceFiles(input.files);
      });
  
      browse?.addEventListener('click', ()=> input?.click());
      input?.addEventListener('change', ()=> announceFiles(input.files));
    }
  
    function announceFiles(fileList){
      if(!fileList || fileList.length === 0) return;
      const names = Array.from(fileList).map(f=>`${f.name} (${Math.round(f.size/1024)} KB)`).join(', ');
      console.log('Selected files:', names);
    }
  
    document.addEventListener('DOMContentLoaded', ()=>{
      document.querySelectorAll('.uploader').forEach(setupUploader);
    });
  })();
  
  
  