import React from 'react';

export default class ImportOverlay extends React.Component {

  render() {
    return (
      <SafeAreaLayout
        style={styles.container}
        insets='top'>
        <TopNavigation
          title='Product Details'
          leftControl={renderBackAction()}
          rightControls={[renderBookmarkAction()]}
        />
        <ContentView />
      </SafeAreaLayout>
    );
  }
}