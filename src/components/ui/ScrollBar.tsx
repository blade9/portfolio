export default function ScrollStyle() {
  return (
    <style jsx global>
        {`
      ::-webkit-scrollbar {
        background: linear-gradient(180deg, #5d00ffff, #310372ff);
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.5);
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #7c3aed, #581c87);
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #9333ea, #7c3aed);
      }
        `}
    </style>
  );
}
