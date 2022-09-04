export const createIcon = function(id, setting_icon, icon_data = []) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');


    const width = setting_icon.canvas_length;
    const size = setting_icon.pixel_number;
    const bit_size = width/size;

    const color1 = setting_icon.color1;
    const color2 = setting_icon.color2;

    let n = 0;
    let position = [];
    //let icon_data = [];
    

    if(icon_data.length == 0) {
        //個体値の配列をランダムで生成
        for (let i = 0; i < size*size/2; i++) {
            icon_data.push(Math.floor(Math.random()*2));
        } 
    }


    //canvasをグリットに区切るための配列
    for (let i = 0; i < size; i++) {
      position.push(n);
      n = n + bit_size;
    }

    //ベースとなる色を塗る
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, width);

    //左右対称にするための配列
    let icon_s = [];
    let icon_r = [];
    //区切ったグリットの色を削除
    let i = 0;
    for (let j = 0; j < size; j++) {
      let v = [];
      for (let k = 0; k < size/2; k++) {
        v[k] = icon_data[i];
        if (icon_data[i] == 0) {
          ctx.fillStyle = color2;
          ctx.clearRect(position[k], position[j], bit_size, bit_size);
        }
        i += 1;
      }
      icon_s.push(v);
      icon_r.push(v.reverse()); 
    }

    //右側の絵を左右対称に作成
    let get_icon = icon_r.flat(2)
    i = 0;
    for (let j = 0; j < size; j++) {
      for (let k = size/2; k < size; k++) {
        if (get_icon[i] == 0) {
          ctx.clearRect(position[k], position[j], bit_size, bit_size);
        }
        i += 1;
      }
    }
    return get_icon;
}

