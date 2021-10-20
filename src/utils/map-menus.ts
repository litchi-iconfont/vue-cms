import { IBreadcurmub } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

//菜单路由映射逻辑
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export { firstMenu }

export function pathMapBreadcumbs(userMenus: any[], currentPath: string): any {
    const breadcurmbs:IBreadcurmub[]=[]
  pathMapToMenu(userMenus, currentPath, breadcurmbs)
  return breadcurmbs
}

//获取某一路径匹配到对应菜单

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcurmbs?: IBreadcurmub[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const fendMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (fendMenu) {
        breadcurmbs?.push({ name: menu.name})
        breadcurmbs?.push({ name: fendMenu.name, path: fendMenu.url })
        return fendMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
