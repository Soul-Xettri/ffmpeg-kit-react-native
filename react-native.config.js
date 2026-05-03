module.exports = {
  dependency: {
    platforms: {
      ios: null,
      android: {
        sourceDir: './android',
        packageImportPath: 'import com.arthenica.ffmpegkit.reactnative.FFmpegKitReactNativePackage;',
        packageInstance: 'new FFmpegKitReactNativePackage()',
      },
    },
  },
};
