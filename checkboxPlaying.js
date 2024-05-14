const checkbox = document.querySelector('#myCheckbox')

checkbox.onclick = () => {
    if (checkbox.checked) {
        console.log("clickou")  

        const html = document.querySelector('body')
        let a = document.createElement('p')

        a.innerText = 'clickou agora printado diferente'
        html.append(a)

    }
    else {
        console.log('tirou o click')
    }
}


/**
 * html usado com script:
 * 
 * <input type="checkbox" id="myCheckbox">
    <label for="myCheckbox">checkbox</label>
 */