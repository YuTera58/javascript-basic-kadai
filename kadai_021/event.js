//ボタンオブジェクトの取得
const btn = document.getElementById('btn');
//テキストオブジェクトの取得
const text = document.getElementById('text');

//ボタンクリックイベント
btn.addEventListener('click', () => {
  //2秒後にテキストの変換
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});