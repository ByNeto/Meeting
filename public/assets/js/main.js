$(window).on('load', function () {
    $('.start-room').click(function () {
        $("#start-room-modal").html(`
            <div class="modal fade" id="${$(this)[0].dataset.target.replace(/[#]/g, '')}" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" style="border-bottom:0;">
                        <h2 class="name mb-2">Insira seu nome ou apelido</h2>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="media flex-column flex-md-row theme-bg-light p-4 p-lg-5">
                            <img style="width: 12%;" class="profile-image mb-3 mb-md-0 mr-md-4 rounded-circle"
                                src="assets/images/speakers/speaker-1.jpg" alt="" />
                            <div style="margin-top: 18px;" class="text-center text-md-left">
                                <div class="input-group mb-4">
                                    <form class="form-inline" action="/room" method="post">
                                        <div class="form-group mx-sm-4 mb-2">
                                            <input type="hidden" id="input_licenc" name="input_licenc" value="6b0ce6ed-3bd2-4b12-9e4a">
                                            <input type="hidden" id="input_room" name="input_room"
                                                value="${$(this)[0].dataset.target.replace(/[#]/g, '')}-Superlógica">
                                            <input type="text" id="input_user" name="input_user" class="form-control"
                                                placeholder="nome ou apelido" required>
                                        </div>
                                        <div class="form-group mx-sm-4 mb-2">
                                        <input type="email" id="input_mail" name="input_mail" class="form-control"
                                            placeholder="email valido" required>
                                        </div>
                                        <button type="submit" id="button-enter"
                                            class="btn btn-outline-primary btn-block mb-2">Entrar na sala ${$(this)[0].dataset.target.replace(/[#]/g, '')}</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `)





        // $("#start-room-modal").text(
        //     `<div class="modal modal-speaker modal-speaker-1" id="modal-Lounge-1" tabindex="-1" role="dialog"
        //         aria-labelledby="Lounge-1-ModalLabel" aria-hidden="true">
        //         <div class="modal-dialog">
        //             <div class="modal-content">
        //                 <div class="modal-header">
        //                     <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        //                     <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">Speaker Name</h4>
        //                 </div>
        //                 <div class="modal-body p-0">
        //                     <div class="media flex-column flex-md-row theme-bg-light p-4 p-lg-5">
        //                         <img class="profile-image mb-3 mb-md-0 mr-md-4 rounded-circle mx-auto"
        //                             src="assets/images/speakers/speaker-1.jpg" alt="" />

        //                         <div class="media-body text-center text-md-left mx-auto">
        //                             <h2 class="name mb-2">Insira seu nome ou apelido</h2>
        //                             <div class="input-group mb-3">

        //                                 <form class="form-inline" action="/room" method="post">
        //                                     <div class="form-group mx-sm-3 mb-2">
        //                                         <input type="hidden" id="input_room" name="input_room" value="${this.href.split('#')[1]}">
        //                                         <input type="text" id="input_user" name="input_user" class="form-control"
        //                                             placeholder="nome ou apelido" required>
        //                                     </div>
        //                                     <button type="submit" id="button-enter"
        //                                         class="btn btn-outline-primary btn-sm mb-2">Entrar</button>
        //                                 </form>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>`);


    });


    // $('#button-enter').click(function () {
    //     postFormData('/room', { user: $("#input-user").val() })
    //         //.then(data => console.log(data))
    //         //.catch(error => console.error(error))

    // });

    // var postFormData = (url, data) => {
    //     return fetch(url, {
    //         method: 'POST',
    //         body: new URLSearchParams(data),
    //         headers: new Headers({
    //             'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //         })
    //     })
    //         .then(response => response.json())
    // }
});