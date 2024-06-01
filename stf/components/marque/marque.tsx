// export const Marquee = ({ icons }: any) => {
//   const marqueeRef = useRef<HTMLDivElement>(null);
//   const [marqueeWidth, setMarqueeWidth] = useState(0);

//   useEffect(() => {
//     const checkWidth = () => {
//       if (marqueeRef.current) {
//         setMarqueeWidth(
//           marqueeRef.current.scrollWidth - marqueeRef.current.offsetWidth,
//         );
//       }
//     };

//     checkWidth();

//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   // Функция для рендеринга иконок
//   const renderIconsTwice = () => (
//     <>
//       {icons.map((icon: any, index: any) => (
//         <div key={index} className="mx-2 inline-block">
//           {icon}
//         </div>
//       ))}
//       {icons.map((icon: any, index: any) => (
//         <div key={`duplicate-${index}`} className="mx-2 inline-block">
//           {icon}
//         </div>
//       ))}
//     </>
//   );
//   return (
//     <div className="relative overflow-hidden" ref={marqueeRef}>
//       <div className="animate-marquee whitespace-nowrap">
//         {renderIconsTwice()}
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           from {
//             transform: translate3d(0, 0, 0);
//           }
//           to {
//             transform: translate3d(-50%, 0, 0);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 5s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };
