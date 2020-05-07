import React from 'react'
import Loadable from 'react-loadable'
import Loadings from '@components/loading'
//通用的过度组件
const loadingComponent = () => {
  return (
    <Loadings />
    // <div>
    //   <Icon type="loading" size="lg" className="loadingName"/>
    // </div>
  )
}
//过度组件默认采用通用的，若传入了loading，则采用传入的过度组件
export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading,
  })
}
