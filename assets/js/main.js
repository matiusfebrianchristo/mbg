const form = document.getElementById("contact_form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form refresh

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const subjek = document.getElementById("subjek").value;
    const pesan = document.getElementById("pesan").value;

    if (!nama || !email || !subjek || !pesan) {
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
        return; 
    }

    console.log(nama);
    console.log(email);
    console.log(subjek);
    console.log(pesan);
});