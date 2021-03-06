import React, { Component } from 'react';
import DrawerComponent from 'components/drawer';
import DrawerContentComponent from 'components/drawer-content';
import TransitionPages from 'pages/TransitionPages';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Actions from 'actions';

class App extends Component {

    render() {
        const {
            location,
            isDrawerOpen,
            openDrawer,
            closeDrawer,
            children
        } = this.props;
        return (
            <div className="App">
                <DrawerComponent 
                    open={isDrawerOpen} 
                    onClose={()=>closeDrawer()}
                    drawerStyle = {{
                    }}
                >
                    <DrawerContentComponent />
                </DrawerComponent>
                <TransitionPages location={location}>
                    {React.cloneElement(children,{
                        openDrawer
                    })}
                </TransitionPages>
            </div>
        );
    }
}

const mapStoreToProps = store => ({
    isDrawerOpen: store.Drawer.isDrawerOpen
})

const mapDispatchToProps = dispatch => ({
    openDrawer: bindActionCreators(Actions.DrawerActions.openDrawer,dispatch),
    closeDrawer: bindActionCreators(Actions.DrawerActions.closeDrawer,dispatch)
})

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(App);