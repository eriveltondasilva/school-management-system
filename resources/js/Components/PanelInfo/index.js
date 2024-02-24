import { PanelInfoItem, PanelInfoRoot } from './PanelInfo'

// ====================================
const PanelInfo = PanelInfoRoot
PanelInfo.Item = PanelInfoItem

export default PanelInfo

// export default function PanelInfo() {
//   return (
//     <PanelInfoRoot>
//       {items.map(({ title, number, icon }, i) => (
//         <Fragment key={`panel-info-${i}`}>
//           <PanelInfoItem title={title} number={number} icon={icon} />
//         </Fragment>
//       ))}
//     </PanelInfoRoot>
//   )
// }
