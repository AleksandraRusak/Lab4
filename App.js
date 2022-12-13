import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Alert,
  Button,
  ActivityIndicator,
  ImageBackground,
  Modal,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [userName, setUserName] = useState("Guest");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState(require("./assets/icon.png"));
  const [inputValue, setInputValue] = useState("");
  const [visibleView, setVisibleView] = useState(false);

  const CreateAlert = ({ setLoading }) => {
    return (
      <Button
        title={loading ? "Loading" : "Load More"}
        onPress={() => {
          setLoading((prevValue) => !prevValue);
          Alert.alert(
            "Unable To Load",
            "There was an error. Please try again.",
            [
              {
                text: "OK",
                onPress: () => setLoading((prevValue) => !prevValue),
              },
            ]
          );
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: `#663399`,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "white",
            marginLeft: 5,
          }}
        >
          Hello {userName}!
        </Text>
        <Pressable
          onPress={() => {
            setModal(true);
          }}
        >
          <ImageBackground
            source={icon}
            style={{
              width: 77,
              height: 77,
              marginRight: 10,
            }}
            imageStyle={{ borderRadius: 200 }}
          >
            {visibleView && (
              <Text
                style={{
                  textAlign: "center",
                  backgroundColor: "white",
                  marginTop: 50,
                  width: 100,
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                {userName}
              </Text>
            )}
          </ImageBackground>
        </Pressable>
      </View>

      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 10,
          marginTop: 15,
          marginLeft: 15,
        }}
      >
        Today's Highlights
      </Text>

      <ScrollView>
        <View style={{ backgroundColor: `#faebd7`, margin: 15 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginLeft: 17,
              marginTop: 20,
            }}
          >
            First Article
          </Text>
          <Article></Article>
        </View>
        <View style={{ backgroundColor: `#faebd7`, margin: 15 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginLeft: 17,
              marginTop: 20,
            }}
          >
            Another Article
          </Text>
          <Article></Article>
        </View>
        <View style={{ backgroundColor: `#faebd7`, margin: 15 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginLeft: 17,
              marginTop: 20,
            }}
          >
            Important One
          </Text>
          <Article></Article>
        </View>
        <View
          style={{ flexDirection: "row-reverse", justifyContent: "center" }}
        >
          <ActivityIndicator animating={loading} size="small" color="grey" />
          <CreateAlert setLoading={setLoading} />
        </View>

        <Modal visible={modal} transparent={true} animationType="fade">
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(50, 50, 50, 0.4)",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 142,
                width: 250,
                backgroundColor: "white",
                alignSelf: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModal((prevValue) => !prevValue);
                }}
              >
                <Image
                  style={{ height: 22, width: 22, marginLeft: 6, marginTop: 6 }}
                  source={require("./assets/close.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginLeft: 20,
                  marginBottom: 6,
                  marginTop: 6,
                }}
              >
                Name:
              </Text>
              <TextInput
                style={{
                  backgroundColor: "whitesmoke",
                  marginLeft: 22,
                  marginRight: 22,
                  padding: 5,
                }}
                placeholder="Enter name"
                value={inputValue}
                onChangeText={(value) => setInputValue(value)}
              />
              <Button
                title="Submit"
                onPress={() => {
                  inputValue == ""
                    ? setUserName("Guest")
                    : setUserName(inputValue);

                  inputValue == ""
                    ? setIcon(require("./assets/icon.png"))
                    : setIcon(require("./assets/profile.png"));

                  inputValue == ""
                    ? setVisibleView(false)
                    : setVisibleView(true);

                  inputValue == setModal((prevValue) => !prevValue);
                }}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const Article = ({}) => {
  return (
    <Text
      style={{
        fontSize: 18,
        marginLeft: 17,
        marginRight: 17,
        marginBottom: 17,
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id aliquam
      nibh, ut vehicula velit. Proin laoreet lectus sit amet risus ullamcorper
      tincidunt. Nam ac scelerisque nibh. Morbi aliquam turpis vitae risus
      faucibus semper. In pellentesque tortor vel urna ullamcorper viverra.
      Integer scelerisque blandit orci, nec vehicula elit hendrerit nec. Fusce a
      orci vel nisl dapibus malesuada pulvinar et tellus. Sed hendrerit leo
      risus, quis tincidunt dui dignissim ullamcorper. In sit amet enim quis
      tortor euismod cursus in nec massa. Suspendisse in ligula ultricies tortor
      suscipit tempus fringilla sed mauris. In tempus sapien sit amet
      scelerisque dapibus. Aliquam at lorem et metus lobortis accumsan viverra
      ut nisi. Morbi sed convallis ante, nec gravida diam.
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
