// Dočasné fotky z fotobanky (Pexels, volně použitelné) — nahradit klientovými
// fotkami ve finální verzi. Viz next.config.ts pro povolenou doménu.
const pexels = (id: string, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const stockPhotos = {
  hero: pexels("28825821", 1920), // balijský chrám v džungli, mlha, atmosférické světlo
  originStory: pexels("4157763", 1000), // sušení kakaových bobů na farmě, tropická nálada
  testimonial: pexels("8942900", 1000), // ruce krájející kakao, rituální atmosféra
  productBloc05: pexels("6261691", 800), // kakao na kakaovém prášku
  productBloc1: pexels("6261694", 800), // kakaová deska s nožem a hoblinkami
  productBeans: pexels("33662924", 800), // pražené kakaové boby na tmavém pozadí
};
