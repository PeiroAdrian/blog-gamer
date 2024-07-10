document.addEventListener('DOMContentLoaded', (event) => {

    let marquee = (selector, speed) => {

        const container = document.querySelector(selector);
        const list = container.children[0];

        let i = 0;

        setInterval(() => {
            list.style.marginLeft = `-${i}px`;

            if(i > list.clientWidth){
                i = 0;
            }


            i = i + speed;
        }, 0);


    }


    marquee(".marquee__container", 0.2);
});