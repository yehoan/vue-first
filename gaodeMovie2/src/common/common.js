//定义一些公共的方法和公共的函数
let tool={};

tool.getScrollTop =() => {
  let scrollTop = 0;
  if (document.documentElement&&document.documentElement.scrollTop)
  {
    scrollTop=document.documentElement.scrollTop;
  }

  else if (document.body)
  {
    scrollTop=document.body.scrollTop;
  }
  return scrollTop;
}
export default  tool;

 
