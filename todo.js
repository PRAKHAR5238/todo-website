
        const input = document.querySelector('input');
        const btn = document.querySelector('.TASK > button');

        btn.addEventListener('click', addList);
        input.addEventListener('keyup', (e) => {
            (e.keyCode === 13 ? addList(e) : null);
        })

        function addList(e) {
            const Notcompleted = document.querySelector('.Notcompleted');
            const completed = document.querySelector('.completed');

            const newLi = document.createElement('li');
            const checkBtn = document.createElement('button');
            const delBtn = document.createElement('button');

            checkBtn.innerHTML = '<i class="fa fa-check"></i>'
            delBtn.innerHTML = '<i class="fa fa-trash"></i>';


            if (input.value !== '') {
                newLi.textContent = input.value;
                input.value = '';
                Notcompleted.appendChild(newLi);
                newLi.appendChild(checkBtn);
                newLi.appendChild(delBtn);
            }

            checkBtn.addEventListener('click', function () {
                const parent = this.parentNode;
                parent.remove();
                completed.appendChild(parent);
                checkBtn.style.display = 'none';
            });

            delBtn.addEventListener('click', function () {
                const parent = this.parentNode;
                parent.remove();
            });
        }

        const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
 function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}



setInterval(()=>{
  const time = document.querySelector(".display #time");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "AM";
  if(hours > 12){
    day_night = "PM";
    hours = hours - 12;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(hours < 10){
    hours = "0" + hours;
  }
  time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
});
