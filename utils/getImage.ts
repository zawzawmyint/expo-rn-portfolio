export const imageMap = {
  "agile.png": require("@/assets/images/tools/agile.png"),
  "aws.png": require("@/assets/images/tools/aws.png"),
  "figma.png": require("@/assets/images/tools/figma.png"),
  "github.png": require("@/assets/images/tools/github.png"),
  "golang.png": require("@/assets/images/tools/golang.png"),
  "java.png": require("@/assets/images/tools/java.png"),
  "js.png": require("@/assets/images/tools/js.png"),
  "mui.png": require("@/assets/images/tools/mui.png"),
  "nextjs.png": require("@/assets/images/tools/nextjs.png"),
  "python.png": require("@/assets/images/tools/python.png"),
  "react.png": require("@/assets/images/tools/react.png"),
  "reactQuery.png": require("@/assets/images/tools/reactQuery.png"),
  "redux.png": require("@/assets/images/tools/redux.png"),
  "shadcn.png": require("@/assets/images/tools/shadcn.png"),
  "tailwind.png": require("@/assets/images/tools/tailwind.png"),
  "typescript.png": require("@/assets/images/tools/typescript.png"),
  "dat.png": require("@/assets/images/experiences/dat.png"),
  "mit.png": require("@/assets/images/experiences/mit.png"),
  "mwc.png": require("@/assets/images/experiences/mwc.png"),
  "tumoco.png": require("@/assets/images/experiences/tumoco.png"),
  "chat-app.png": require("@/assets/images/projectsImage/chat-app.png"),
  "cus-service.png": require("@/assets/images/projectsImage/cus-service.png"),
  "gallery.png": require("@/assets/images/projectsImage/gallery.png"),
  "movies-nextjs.png": require("@/assets/images/projectsImage/movies-nextjs.png"),
  "movies.png": require("@/assets/images/projectsImage/movies.png"),
  "online-courses.png": require("@/assets/images/projectsImage/online-courses.png"),
  "portfolio.png": require("@/assets/images/projectsImage/portfolio.png"),
  "shop.png": require("@/assets/images/projectsImage/shop.png"),
  "todos.png": require("@/assets/images/projectsImage/todos.png"),
} as const;

// Create a helper function with proper typing and fallback
export const getImage = (imageName: string) => {
  const defaultImage = require("@/assets/images/profile.png"); // fallback image
  return imageMap[imageName as keyof typeof imageMap] || defaultImage;
};
