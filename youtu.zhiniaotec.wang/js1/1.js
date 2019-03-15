  adaptation(750);

        function adaptation(size) {
            if (document.documentElement.clientWidth > size) {
                document.documentElement.style.fontSize = size / 7.5 + "px"
            } else {
                document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px"
            }
        }