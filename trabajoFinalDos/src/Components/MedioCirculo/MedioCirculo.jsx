import { Box } from "@chakra-ui/react";

const MedioCirculo = () => {
  return (
    <Box
    position="relative" // Necesario para posicionar los elementos hijos absolutamente
    >
        <Box
        position="absolute"
        bottom="7"
        top='-5'
        left="230px" // Ajusta la posición horizontal según sea necesario
        width="40px"
        height="20px" // Ajusta la altura para que sea la mitad del ancho
        backgroundColor="#e3a5ec" // Color de fondo del medio círculo
        borderRadius="100px 100px 0 0" // Redondeo solo en la parte superior para formar la mitad del círculo
        transform="rotate(-150deg)" // Rota el medio círculo 150 grados a la izquierda
        transformOrigin="bottom center" // Define el punto de origen de la rotación
        />
     </Box>
  );
};

export { MedioCirculo };
