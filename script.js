$(document).ready(function(){
    
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);



    // containerImg = $("<div class='row no-gutters' ></div>")
    // $("#lights").append(containerImg)

    var lights = []
    for (let j = 0; j < 2; j++) {
        // Ramdom color
        var randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
        // Ramdon checked
        var check_status = [
            'checked',
            '',
        ]
        var randomCheck = check_status[Math.floor(Math.random() * check_status.length)];
        // Tableau des valeur
        var myLight = {
            id: j,
            color: randomColor,
            statu: randomCheck
        }
        lights.push(myLight)

        
    }

    var context = { lights: lights };
    var html = template(context);
    $("body").append(html)
    
    // Constrution HTML
    for (let i of lights){
        
        $(function () {
            $('#toggle-' + i.id).bootstrapToggle();
        })
        // LIGHT
        // col = $(`<div class='col-3 text-center p-5 border' id='container-img-${i.id}'>`)
        // $(containerImg).append(col)
        // icon = `<i class="far fa-lightbulb fa-5x" data-color=${i.color}></i>`
        // $(col).append(`<h2>Light : ${i.id} </h2>`)
        // $(col).append(icon)
        // // BUTTON ON/OFF
        // $(col).append(`<div class="p-3"><input ${i.statu} data-onstyle="success" data-offstyle="danger" class="lightBtn" type="checkbox" data-toggle="toggle" id="btn-${i.id}"></div>`)
        // // BUTTON EDIT
        // $(col).append('<div><a href=""><i class="far fa-edit text-success"></i></a></div>')

    }


    // CHANGEMENT COULEUR
    $(".lightBtn").change(function () {
        var light = $(this).parents(".lights_box").find(".fa-lightbulb")
        if ($(this).prop("checked")) {
      
            light.css("color", $(light).data('color'));      
        }

        else

            light.css("color", "black");

    });
    // $(".btn btn-primary toggle-").change(function(){

    // })
    $(".lightBtn").change()

    $(".create-light").click(function(){
        console.log('plop');
        
        for (let j = 0; j < 2; j++) {
            // Ramdom color
            var randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
            // Ramdon checked
            var check_status = [
                'checked',
                '',
            ]
            var randomCheck = check_status[Math.floor(Math.random() * check_status.length)];
            // Tableau des valeur
            var myLight = {
                id: j,
                color: randomColor,
                statu: randomCheck
            }
            
            
        }
        lights.push(myLight)
    })
})



