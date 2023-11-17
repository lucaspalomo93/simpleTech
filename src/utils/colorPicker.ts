export const getColorPickerName = (color: string) => {
  // Dividir la cadena en función del carácter '/' y obtener el último elemento
  const parts = color.split('/');
  const filenameWithExtension = parts.length > 0 ? parts[parts.length - 1] : '';

  // Verificar si la cadena tiene al menos un punto (.) para evitar errores con la extensión
  const extensionIndex = filenameWithExtension.lastIndexOf('.');
  if (extensionIndex !== -1) {
    // Devolver el nombre del archivo sin la extensión
    return filenameWithExtension.slice(0, extensionIndex);
  }

  // En caso de que no haya un punto en la cadena, devolver el nombre completo
  return filenameWithExtension;
};
