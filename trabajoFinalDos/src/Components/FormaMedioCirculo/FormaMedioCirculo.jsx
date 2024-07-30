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
        top="12"
        left="40px" // Traslada el círculo rosa 30px a la derecha
        width="50px"
        height="50px"
        backgroundColor="#e3a5ec" // Color rosa para el círculo
        borderRadius="50%" // Redondeo completo para formar un círculo
      />

      {/* Medio círculo rotado */}
      <Box
        position="absolute"
        bottom="0"
        left="10px" // posición horizontal del medio circulo
        width="80px"
        height="40px" 
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
