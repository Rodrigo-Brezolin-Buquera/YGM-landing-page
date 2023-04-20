import ReactWhatsapp from "react-whatsapp";

export const WhatsAppContainer = (props) => {
  

    const whatsappMessage = "Olá! Gostaria de mais informações sobre as aulas presenciais de yoga, como horários e valores";
    const reactWhatapp = "5515981302549"
    return (
        <ReactWhatsapp number={reactWhatapp} message={whatsappMessage}>
            {props.children}
        </ReactWhatsapp>    
    );
};