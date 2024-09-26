// Adicione interatividade aqui, se necessário
// Por exemplo, para mostrar uma mensagem quando o QR code for clicado:
const qrCode = document.querySelector('img');

qrCode.addEventListener('click', () => {
    alert('Leia com atenção o texto do QR code!');
});