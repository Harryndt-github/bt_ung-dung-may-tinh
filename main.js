let bienA = document.getElementById('bien1');
    bienB = document.getElementById('bien2');
    result = document.getElementById('result');

    document.getElementById('add').onclick = function() {
        let ketqua = (+bienA.value) + (+bienB.value);
        result.innerHTML = ketqua;
    }
    document.getElementById('sub').onclick = function() {
        let ketqua = (+bienA.value) - (+bienB.value);
        result.innerHTML = ketqua;
    }
    document.getElementById('mul').onclick = function() {
        let ketqua = (+bienA.value) * (+bienB.value);
        result.innerHTML = ketqua;
    }
    document.getElementById('div').onclick = function() {
        let ketqua = (+bienA.value) / (+bienB.value);
        result.innerHTML = ketqua;
    }