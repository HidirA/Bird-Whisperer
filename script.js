const birdsounds = ['Apostlebird-1', 'Apostlebird-2', 'Australian-King-Parrot-1', 'Australian-King-Parrot-2', 'Australian-Magpie', 'Rainbow-Lorikeet','Red-backed-Kingfisher-1', 'Red-backed-Kingfisher-2', 'Willie-Wagtail'];

birdsounds.forEach(birdsound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = birdsound;

  btn.addEventListener('click', () => {
    stopBirdSongs();
    document.getElementById(birdsound).play();
  })

  document.getElementById('buttons').appendChild(btn);
})

function stopBirdSongs() {
  birdsounds.forEach(birdsound => {
    const birdsong = document.getElementById(birdsound);

    birdsong.pause();
    birdsong.currentTime = 0;
  })
}
