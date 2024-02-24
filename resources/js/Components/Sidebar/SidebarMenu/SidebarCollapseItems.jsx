// import { Link } from '@inertiajs/react'
// import { Sidebar } from 'flowbite-react'

// // ==================================
// export default function SidebarCollapseItems({ items }) {
//   if (!items) return null

//   return (
//     <>
//       {items.map(({ title, icon, routes, subItems }, index) => (
//         <Sidebar.Collapse
//           key={`sidebar-collapse-${index}`}
//           icon={icon}
//           label={title}
//           open={route().current(routes)}>
//           {subItems.map(
//             ({ title: subItemTitle, route: routeName }, subIndex) => (
//               <Sidebar.Item
//                 key={`sidebar-subItem-${subIndex}`}
//                 as={Link}
//                 href={route(routeName)}
//                 active={route().current(routeName)}>
//                 {subItemTitle}
//               </Sidebar.Item>
//             )
//           )}
//         </Sidebar.Collapse>
//       ))}
//     </>
//   )
// }
