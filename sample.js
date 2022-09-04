//window_sizeを取得
    //window_sizeに応じてcanvas_sizeを変更
    get_window_width() {
        let page_width = window.innerWidth;
        console.log(page_width);
        if(page_width >= 1024) {
          this.canvas_length = 150;
        }else if(page_width >= 768) {
          this.canvas_length = 120;
        }else if(page_width >= 640){
          this.canvas_length = 100;
        }else {
          this.canvas_length = 100;
        }
    }