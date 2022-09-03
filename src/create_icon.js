export const createIcon = function(id, canvas_length) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');
    const width = canvas_length;
    const size = 8
    let bit_size = width/size;
    let n = 0;
    let position = [];
    let individual = [];

    //個体値の配列をランダムで生成
    for (let i = 0; i < size*size/2; i++) {
    individual.push(Math.floor(Math.random()*2));
    }    

    //canvasをグリットに区切るための配列
    for (let i = 0; i < size; i++) {
      position.push(n);
      n = n + bit_size;
    }

    //ベースとなる色を塗る
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, width);

    //左右対称にするための配列
    let individual_s = [];
    let individual_r = [];
    //区切ったグリットの色を削除
    let i = 0;
    for (let j = 0; j < size; j++) {
      let v = [];
      for (let k = 0; k < size/2; k++) {
        v[k] = individual[i];
        if (individual[i] == 0) {
          ctx.fillStyle = 'white';
          ctx.clearRect(position[k], position[j], bit_size, bit_size);
        }
        i += 1;
      }
      individual_s.push(v);
      individual_r.push(v.reverse()); 
    }

    //右側の絵を左右対称に作成
    individual_r = individual_r.flat(2)
    i = 0;
    for (let j = 0; j < size; j++) {
      for (let k = size/2; k < size; k++) {
        if (individual_r[i] == 0) {
          ctx.clearRect(position[k], position[j], bit_size, bit_size);
        }
        i += 1;
      }
    }
}

