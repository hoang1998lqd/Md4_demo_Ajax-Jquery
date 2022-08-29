// Bật modal
function openModal() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8088/rooms",
        success: function (data) {
            let content = ""
            for (let i = 0; i < data.length; i++) {
                content += ' <option value="'+ data[i].id +'">' + data[i].name  +
                    '</option>'
            }
            document.getElementById("select-room").innerHTML = content;
        }
    })
    $('#myModal').modal('show');
}
//Load dữ liệu
loadData()
//Hàm load dữ liệu của People trong database
function loadData() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8088/people",
        success: function (data) {
          loadTable(data)
        }
    })
}

function check() {
    let id = document.getElementById("select-room").value;
    let content = ""
    if (id == 1){
        content += ' <option value="'+ "Tầng 4" +'">' + "Tầng 4" +
            '</option>'
        content += ' <option value="'+ "Tầng 5" +'">' + "Tầng 4" +
            '</option>'
        content += ' <option value="'+ "Tầng 6" +'">' + "Tầng 4" +
            '</option>'
        document.getElementById("selection").innerHTML = content
    }else {
        content += ' <option value="'+ "Tầng 1" +'">' + "Tầng 1" +
            '</option>'
        content += ' <option value="'+ "Tầng 2" +'">' + "Tầng 2" +
            '</option>'
        content += ' <option value="'+ "Tầng 3" +'">' + "Tầng 3" +
            '</option>'
        document.getElementById("selection").innerHTML = content
    }
}

// Hàm tận dụng
function loadTable(list) {
    let content = "";
    for (let i = 0; i < list.length; i++) {
            content += "<tr>"
            content += "<th>"+ (i+1) +"</th>"
            content += "<th>"+ list[i].name +"</th>"
            content += "<th>"+ list[i].age +"</th>"
            content += "<th>"+ list[i].phone +"</th>"
            content += "<th>"+ list[i].address +"</th>"
            content += "<th>"+ list[i].room.name +"</th>"
            content += "<th><button onclick='getHuman("+ list[i].id +")'>Update</button></th>"
            content += "<th><button onclick='deleteHuman("+ list[i].id +")'>Delete</button></th>"
            content += "</tr>"
    }
    document.getElementById("list-human").innerHTML = content;
}


// Delay time


// Tạo mới đối tượng Human
function createHuman() {
    let name = $('#name').val()
    let age = $('#age').val()
    let phone = $('#phone').val()
    let address = $('#address').val()
    let room_id = $('#select-room').val()
    let student = {
        name: name,
        age: age,
        phone: phone,
        address: address,
        room:{
            id:room_id
        }
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(student),
        //tên API
        url: "http://localhost:8088/people",
        //xử lý khi thành công
        success: function () {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tạo mới thành công',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(loadData, 2000);
            $('#myModal').modal('hide');
        }
    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}


// Lấy dữ liệu nhập vào form Update
function getHuman(idHuman) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8088/people/" + idHuman,
        success: function (data) {
            openModal()
            document.getElementById("idHuman").innerHTML = " <th>ID</th>\n" +
                " <td><label><input type=\"text\" readonly id=\"id\"></label></td>";
            document.getElementById("id").value= idHuman;
            document.getElementById("name").value= data.name;
            document.getElementById("age").value = data.age;
            document.getElementById("phone").value = data.phone;
            document.getElementById("address").value =data.address;
            document.getElementById("select-room").value =data.room.name;
            document.getElementById("title-button").innerHTML = "Update";
            document.getElementById("title-button").setAttribute("onclick","updateHuman()");
        }
    })
}
function updateHuman() {
    let id = document.getElementById("id").value;
    console.log(id)
    let name = $('#name').val()
    let age = $('#age').val()
    let phone = $('#phone').val()
    let address = $('#address').val()
    let room_id = $('#select-room').val()
    let student = {
        id:id,
        name: name,
        age: age,
        phone: phone,
        address: address,
        room:{
            id:room_id
        }
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        data: JSON.stringify(student),
        //tên API
        url: "http://localhost:8088/people",
        //xử lý khi thành công
        success: function () {
            loadData()
            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("address").value = "";
            $('#myModal').modal('hide');
        }
    });

}
function deleteHuman(id) {
    Swal.fire({
        title: 'Bạn có chắc muốn xóa ?',
        text: "Bạn không thể khôi phục dữ liệu sau khi xóa  !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Xóa!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success',
                $.ajax({
                    type: "DELETE",
                    url: "http://localhost:8088/people/" + id,
                    success: function () {
                        Swal.fire({
                            position: 'top-end',
                                icon: 'success',
                            title: 'Xóa thành công',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        loadData()
                    }

                })
            )
        }
    })


}