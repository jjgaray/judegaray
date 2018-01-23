function StartPromise() {
    let myFirstPromise = new Promise((resolve, reject) => {
      // We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
      // In this example, we use setTimeout(...) to simulate async code. 
      // In reality, you will probably be using something like XHR or an HTML5 API.
      
        $("#btnSave").click(function(){resolve('yay');});
        
        $('#myModal').on('hidden.bs.modal', function (e) {
          reject('boo');
        })
        
        $('#myModal').modal('show');
    });
    
    myFirstPromise.then((successMessage) => {
      // successMessage is whatever we passed in the resolve(...) function above.
      // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
      console.log(successMessage);
      $('#myModal').modal('hide');
    }).catch((reason) => {
        console.log(reason);
        $('#myModal').modal('hide');
    });
}
