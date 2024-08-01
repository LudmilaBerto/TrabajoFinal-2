import { Box } from "@chakra-ui/react";

const Circulo = () => {
  return (
    <Box
      position="relative" // Necesario para posicionar los elementos hijos absolutamente
      width="100px" // Define el ancho total del contenedor
      height="100px" // Define el alto total del contenedor
    >
      {/* Círculo rosa */}
      <Box
        position="absolute"
        top={{base:"87", sm:"null", md:"16", lg:"16", xl:"null"}}
        left={{base:"65px", sm:"null",md:"70px", lg:"null", xl:"null"}}
        // Traslada el círculo rosa 30px a la derecha
        width={{base:"30px", sm:"null",md:"50px"}}
        height={{base:"30px", sm:"null",md:"50px"}}
        backgroundColor="#e3a5ec" // Color rosa para el círculo
        borderRadius="50%" // Redondeo completo para formar un círculo
      />

      {/* Medio círculo rotado */}
      <Box
        position="absolute"
        bottom="-5"
        left={{base:"50px", sm:"null",md:"40px", lg:"35px", xl:"null"}} // posición horizontal del medio circulo
        width={{base:"40px", sm:"null",md:"80px", lg:"null", xl:"null"}}
        height={{base:"20px", sm:"null",md:"40px", lg:"null", xl:"null"}}
        backgroundColor="#ffffff" // Color de fondo del medio círculo
        borderRadius="100px 100px 0 0" // Redondeo solo en la parte superior para formar la mitad del círculo
        border="2px solid"
        transform="rotate(-150deg)" // Rota el medio círculo 150 grados a la izquierda
        transformOrigin="bottom center" // Defino el punto de origen de la rotación
      />
    </Box>
  );
};

export { Circulo };
