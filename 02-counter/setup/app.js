let count = 0;

const btns = document.querySelectorAll(".btn");
const val = document.getElementById("value");

btns.forEach(btn => {
    btn.addEventListener("click", e =>{
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            count--;
        }

        else if(styles.contains('increase')){
            count++;
        }

        else{
            count = 0;
        }

        if(count > 0)
        {
            val.style.color = 'green';
        }

        else if(count < 0)
        {
            val.style.color = 'red';
        }

        else{
            val.style.color = '#222';
        }
        val.textContent = count;
    });
});