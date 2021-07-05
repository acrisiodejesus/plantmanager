import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import Confirmation from '../pages/Confirmation';

import { UserIdentification } from '../pages/UserIdentification';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';
import AuthRoutes from './tab.routes';

const stacksRoutes = createStackNavigator();
const AppRoutes: React.FC = () => (
    <stacksRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white,

            },
        }}
    >
        <stacksRoutes.Screen
            name="Welcome"
            component={Welcome}
        />
        <stacksRoutes.Screen
            name="UserIdentification"
            component={UserIdentification}
        />
        <stacksRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />
        <stacksRoutes.Screen
            name="PlantSelect"
            component={AuthRoutes}
        />
        <stacksRoutes.Screen
            name="PlantSave"
            component={PlantSave}
        />
        <stacksRoutes.Screen
            name="MyPlants"
            component={AuthRoutes}
        />
    </stacksRoutes.Navigator>
)

export default AppRoutes;