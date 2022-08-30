const uuid = () => (Math.random() + 1).toString(36).substring(7);
const clone = (item) => JSON.parse(JSON.stringify(item));
const _typeof = (item) =>
  Object.prototype.toString.call(item).slice(8, -1).toLowerCase();

const avatars = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABnsf9AuFsrsNt8CxpSsCIDIofHzHtS39fAHHH_Ry&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABnsf9AuFsrsNt8CxpSsCIDIofHzHtS39fAHHH_Ry&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABnsf9AuFsrsNt8CxpSsCIDIofHzHtS39fAHHH_Ry&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABnsf9AuFsrsNt8CxpSsCIDIofHzHtS39fAHHH_Ry&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABnsf9AuFsrsNt8CxpSsCIDIofHzHtS39fAHHH_Ry&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABnsf9AuFsrsNt8CxpSsCIDIofHzHtS39fAHHH_Ry&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABnsf9AuFsrsNt8CxpSsCIDIofHzHtS39fAHHH_Ry&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABnsf9AuFsrsNt8CxpSsCIDIofHzHtS39fAHHH_Ry&s",
];

const alignments = [
  { id: "left", label: "Left" },
  { id: "right", label: "Right" },
  { id: "center", label: "Center" },
  { id: "justify", label: "Justify" },
];

const position = [
  { id: "left", label: "Left" },
  { id: "right", label: "Right" },
  { id: "bottom", label: "Bottom" },
  { id: "top", label: "Top" },
];

const borderRadius = [
  "3px",
  "4px",
  "5px",
  "10px",
  "12px",
  "15px",
  "20px",
  "25px",
  "30px",
  "50%",
];

export { uuid, clone, _typeof, avatars, alignments, borderRadius, position };
