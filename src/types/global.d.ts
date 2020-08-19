type ImageSourcePropType = import('react-native').ImageSourcePropType;

declare module '*.png' {
  const content: ImageSourcePropType;
  export default content;
}
