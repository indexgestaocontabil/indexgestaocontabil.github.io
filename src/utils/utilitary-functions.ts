export const getWhatsAppLink = (phoneNumber: string) =>
  `https://wa.me/${phoneNumber}`;

export const getInstagramLink = (account: string) =>
  `https://www.instagram.com/${account}/`;

export const getLinkedinLink = (account: string) =>
  `https://www.linkedin.com/in/${account}/`;

// Ref: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
export const generateUUID = () => {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
};
