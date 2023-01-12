import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Image } from "react-native";
import { TextBtn, ContainerBtn } from "./styled";
const Done = ({ ...props }) => (
  <ContainerBtn {...props}>
    <TextBtn>Iniciar Pedido</TextBtn>
  </ContainerBtn>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      DoneButtonComponent={Done}
      onDone={() => navigation.navigate("Home")}
      pages={[
        {
          backgroundColor: "#F07704",
          image: (
            <Image
              source={require("./../../assets/intro.png")}
              style={{ width: "100%", height: "100%" }}
            />
          ),
        },
      ]}
    />
  );
};

export default OnboardingScreen;
