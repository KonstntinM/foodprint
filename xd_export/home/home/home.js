import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Home extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="6e52f01b-93f3-42c2-9a77-d33c290cac2f" style={styles.home}>
        <View data-layer="b6bc6bb3-43e6-4970-9eea-e81b3b39e57d" style={styles.home_bgHeader}></View>
        <View data-layer="adf7da60-7816-4000-b382-85b3623b2050" style={styles.home_gruppe6}>
            <Text data-layer="cbccbfa5-19e2-4efb-ab71-8696fa2b9e67" style={styles.home_gruppe6_scanAndScore}>Scan and 
Score</Text>
            <View data-layer="42a58d5b-3cb7-4284-afc7-66a2bb18c74b" style={styles.home_gruppe6_gruppe5}>
                <ScrollView data-layer="54bd3f8e-d604-4456-8ad5-8675d307454e" style={styles.home_gruppe6_gruppe5_tips}>
                    <View data-layer="851452aa-0f90-4499-add5-9624e1e87f30" style={styles.home_gruppe6_gruppe5_tips_gruppe1c1fed492}>
                        <View data-layer="6385aab3-a372-4691-be40-df4ab774bf77" style={styles.home_gruppe6_gruppe5_tips_gruppe1c1fed492_rechteck26e5a9917}></View>
                        <ReactImage data-layer="e0c8024c-fff8-490a-8825-a8b5778d9d54" source={require('./assets/bananas6986081920e8eaff6e.png')} style={styles.home_gruppe6_gruppe5_tips_gruppe1c1fed492_bananas6986081920e8eaff6e} />
                    </View>
                    <View data-layer="6ce4fc12-8f1b-4c92-af66-19685ec6c112" style={styles.home_gruppe6_gruppe5_tips_gruppe1b4f0c08c}>
                        <View data-layer="0d556422-71db-4e63-a78e-78745756c4cc" style={styles.home_gruppe6_gruppe5_tips_gruppe1b4f0c08c_rechteck2dd09ef58}></View>
                        <ReactImage data-layer="3001db85-b338-4baa-8be6-0d2d93e46215" source={require('./assets/apple17767441920.png')} style={styles.home_gruppe6_gruppe5_tips_gruppe1b4f0c08c_apple17767441920} />
                    </View>
                    <View data-layer="637ed6f3-8ccf-4ad4-96e0-e9c722a4d3b7" style={styles.home_gruppe6_gruppe5_tips_gruppe1667ed5af}>
                        <View data-layer="c3eb76cd-f54c-4ceb-a278-e69583c771f9" style={styles.home_gruppe6_gruppe5_tips_gruppe1667ed5af_rechteck26e38221a}></View>
                        <ReactImage data-layer="00e88166-cfd8-49d9-8546-1fa240d859f4" source={require('./assets/bananas698608192031e56373.png')} style={styles.home_gruppe6_gruppe5_tips_gruppe1667ed5af_bananas698608192031e56373} />
                    </View>
                    <View data-layer="f06290c4-eb46-470c-9a48-5265c26cf5ab" style={styles.home_gruppe6_gruppe5_tips_gruppe1ee87136b}>
                        <View data-layer="f7227b87-06e6-456f-b3bb-231693388341" style={styles.home_gruppe6_gruppe5_tips_gruppe1ee87136b_rechteck2ca2f526a}></View>
                        <ReactImage data-layer="c9ad5fdd-86e4-46ce-8a50-c37e809c5447" source={require('./assets/bananas6986081920a7277893.png')} style={styles.home_gruppe6_gruppe5_tips_gruppe1ee87136b_bananas6986081920a7277893} />
                    </View>
                    <View data-layer="83c3c5ce-d991-4d86-8b57-6ad9a813c1c1" style={styles.home_gruppe6_gruppe5_tips_gruppe1}>
                        <View data-layer="902ab406-5b9e-4dd2-8c31-7c7029cbbbf3" style={styles.home_gruppe6_gruppe5_tips_gruppe1_rechteck2}></View>
                        <ReactImage data-layer="a8e5226f-460d-4c68-b7f9-fe73a45e1a68" source={require('./assets/bananas6986081920.png')} style={styles.home_gruppe6_gruppe5_tips_gruppe1_bananas6986081920} />
                    </View>
                </ScrollView>
                <Text data-layer="5475cf38-a07a-41bd-b5cd-34017d54fe3a" style={styles.home_gruppe6_gruppe5_recentPosts}>Recent Posts</Text>
            </View>
        </View>
        <View data-layer="e726bf59-fd54-4180-bb99-194446529e6b" style={styles.home_gruppe7}>
            <ReactImage data-layer="51b48c37-aa29-489b-97eb-367ae9e60f84" source={require('./assets/barcodePlatzhalter.png')} style={styles.home_gruppe7_barcodePlatzhalter} />
            <View data-layer="935ac8a5-425e-4b84-a390-1f2a97a60301" style={styles.home_gruppe7_gruppe4}>
                <View data-layer="02aaf59b-bdc2-403d-a760-aeea88f44c45" style={styles.home_gruppe7_gruppe4_cameraWrapper}></View>
                <Text data-layer="ff599037-bf35-4935-adeb-b028a21e7cae" style={styles.home_gruppe7_gruppe4_enterbarcodetext}>or enter your barcode</Text>
                <View data-layer="2cdc9266-b2e7-4647-a007-90dd586d5eb3" style={styles.home_gruppe7_gruppe4_gruppe2}>
                    <View data-layer="217ac850-0137-4dbc-ae2b-70313c0f06be" style={styles.home_gruppe7_gruppe4_gruppe2_rechteck3}></View>
                    <Text data-layer="0c08f96e-e0eb-4586-80f6-c33d6e369236" style={styles.home_gruppe7_gruppe4_gruppe2_enterBarcode}>Enter Barcode ...</Text>
                </View>
            </View>
        </View>
        <View data-layer="4d74d0d9-e043-4ac9-87af-518cd9150513" style={styles.home_komponente81}>
            <View data-layer="46b56bab-0bd0-443c-a1f9-8ecd8bbfdba4" style={styles.home_komponente81_menu}></View>
            <View data-layer="51dba84e-4ad5-42d3-95b4-faea70da67dc" style={styles.home_komponente81_gruppe3}>
                <View data-layer="e842a398-ae5a-41a6-9504-c2ed9ec6807d" style={styles.home_komponente81_gruppe3_history}>
                    <View data-layer="c07cfe40-08ae-4ea1-bf6a-a27af9d225b3" style={styles.home_komponente81_gruppe3_history_layer2}>
                        <Svg data-layer="6aba8e9f-121c-4630-ad9e-1691d1ef8ab0" style={styles.home_komponente81_gruppe3_history_layer2_pfad10} preserveAspectRatio="none" viewBox="2.999999761581421 4.999998092651367 37.33885192871094 34.4666748046875" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 33.15829849243164 39.46669006347656 L 10.18054580688477 39.46669006347656 C 6.214839935302734 39.46669006347656 2.999999761581421 36.2518424987793 2.999999761581421 32.28612899780273 L 2.999999761581421 12.1805591583252 C 2.999999761581421 8.214845657348633 6.214841365814209 4.999998569488525 10.18054866790771 4.999999523162842 L 33.15829849243164 4.999999523162842 C 37.12400054931641 4.999999523162842 40.33884811401367 8.214846611022949 40.33884811401367 12.1805591583252 L 40.33884811401367 32.28612899780273 C 40.33884811401367 36.2518424987793 37.12400054931641 39.46669006347656 33.15829849243164 39.46669006347656 Z M 10.18054580688477 7.872223854064941 C 7.801122188568115 7.872223854064941 5.872217655181885 9.801133155822754 5.872218608856201 12.18056106567383 L 5.872218608856201 32.28612899780273 C 5.872218608856201 34.66555786132813 7.801123142242432 36.59446334838867 10.18054580688477 36.59446334838867 L 33.15829849243164 36.59446334838867 C 35.53772354125977 36.59446334838867 37.46662902832031 34.66555786132813 37.46662902832031 32.28612899780273 L 37.46662902832031 12.1805591583252 C 37.46662902832031 9.801130294799805 35.53772354125977 7.872223854064941 33.15829849243164 7.872223854064941 L 10.18054580688477 7.872223854064941 Z"  /></Svg>
                        <Svg data-layer="d11461f0-a74f-4817-9e92-e9ba812bbaf9" style={styles.home_komponente81_gruppe3_history_layer2_pfad11} preserveAspectRatio="none" viewBox="18.999996185302734 18.999998092651367 8.616653442382812 8.61669921875" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 26.18054389953613 27.61666870117188 L 20.43610572814941 27.61666870117188 C 19.64296531677246 27.61666870117188 18.99999618530273 26.97369956970215 18.99999618530273 26.1805591583252 L 18.99999618530273 20.43611145019531 C 18.99999618530273 19.64296913146973 19.64296531677246 18.99999809265137 20.43610572814941 18.99999809265137 L 26.18054389953613 18.99999809265137 C 26.97368621826172 18.99999809265137 27.61665153503418 19.64296913146973 27.61665153503418 20.43611145019531 L 27.61665153503418 26.1805591583252 C 27.61665153503418 26.97369956970215 26.97368621826172 27.61666870117188 26.18054389953613 27.61666870117188 Z M 21.87221527099609 24.74444580078125 L 24.74443435668945 24.74444580078125 L 24.74443435668945 21.87222290039063 L 21.87221527099609 21.87222290039063 L 21.87221527099609 24.74444580078125 Z"  /></Svg>
                        <Svg data-layer="f082b5f1-1537-413e-88e5-2891ee1c3ec3" style={styles.home_komponente81_gruppe3_history_layer2_pfad12} preserveAspectRatio="none" viewBox="2.999999761581421 10.999999046325684 37.33885192871094 2.8721923828125" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 38.90274047851563 13.87222194671631 L 4.436108589172363 13.87222194671631 C 3.642967700958252 13.87222194671631 2.999999761581421 13.2292537689209 2.999999761581421 12.43611145019531 C 2.999999761581421 11.64296722412109 3.642967700958252 10.99999904632568 4.436108589172363 10.99999904632568 L 38.90274047851563 10.99999904632568 C 39.69588088989258 10.99999904632568 40.33884811401367 11.64297103881836 40.33884811401367 12.43611145019531 C 40.33884811401367 13.2292537689209 39.69588088989258 13.87222194671631 38.90274047851563 13.87222194671631 Z"  /></Svg>
                        <Svg data-layer="1173d324-959f-439f-a155-05a0afa3e58b" style={styles.home_komponente81_gruppe3_history_layer2_pfad13} preserveAspectRatio="none" viewBox="9.999998092651367 2.999999761581421 2.872222900390625 8.61669921875" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 11.43610763549805 11.61667060852051 C 10.64296531677246 11.61667060852051 9.999998092651367 10.97370052337646 9.999998092651367 10.18055820465088 L 9.999998092651367 4.436111450195313 C 9.999998092651367 3.642969131469727 10.64296722412109 2.999999761581421 11.43610763549805 2.999999761581421 C 12.22924995422363 2.999999761581421 12.87221622467041 3.642969131469727 12.87221622467041 4.436111450195313 L 12.87221622467041 10.18055820465088 C 12.87221622467041 10.97370052337646 12.229248046875 11.61667060852051 11.43610763549805 11.61667060852051 Z"  /></Svg>
                        <Svg data-layer="7bc74a30-23db-4fd8-9950-e66720214a1c" style={styles.home_komponente81_gruppe3_history_layer2_pfad14} preserveAspectRatio="none" viewBox="19.999996185302734 2.999999761581421 2.872222900390625 8.61669921875" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 21.43610572814941 11.61667060852051 C 20.64296913146973 11.61667060852051 19.99999618530273 10.97370052337646 19.99999618530273 10.18055820465088 L 19.99999618530273 4.436111450195313 C 19.99999618530273 3.642969131469727 20.64296913146973 2.999999761581421 21.43610572814941 2.999999761581421 C 22.22924995422363 2.999999761581421 22.87221527099609 3.642969131469727 22.87221527099609 4.436111450195313 L 22.87221527099609 10.18055820465088 C 22.87221527099609 10.97370052337646 22.22924995422363 11.61667060852051 21.43610572814941 11.61667060852051 Z"  /></Svg>
                    </View>
                    <View data-layer="8bd76a12-815e-4db1-80a4-69b0748cce2f" style={styles.home_komponente81_gruppe3_history_frame}>
                        <View data-layer="3d6d98cb-868e-4eef-b5fe-9ed6c811ef7d" style={styles.home_komponente81_gruppe3_history_frame_rechteck4}></View>
                    </View>
                </View>
                <View data-layer="ab0df4e1-1c10-42d4-8c9b-bd45578729a6" style={styles.home_komponente81_gruppe3_settings}>
                    <Svg data-layer="238c1826-1881-4dc8-87be-331f81e33101" style={styles.home_komponente81_gruppe3_settings_pfad15} preserveAspectRatio="none" viewBox="1.9999998807907104 2 38.75848388671875 38.758544921875" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 40.75846862792969 21.3792667388916 C 40.75846862792969 18.65371131896973 38.77763366699219 16.38080024719238 36.18081665039063 15.92538642883301 L 35.70048904418945 14.76955127716064 C 37.21622085571289 12.61014747619629 37.00858688354492 9.604976654052734 35.08173751831055 7.676740169525146 C 33.21856307983398 5.813561916351318 30.09988975524902 5.571321487426758 27.9875545501709 7.056603908538818 L 26.83172225952148 6.577658653259277 C 26.37631034851074 3.980838060379028 24.10478591918945 2 21.37923431396484 2 C 18.65368270874023 2 16.38077545166016 3.980838060379028 15.92536449432373 6.577660083770752 L 14.76953125 7.056605339050293 C 12.61289978027344 5.543637752532959 9.604965209960938 5.748504638671875 7.676731109619141 7.676741123199463 C 6.630252838134766 8.721837043762207 6.054412841796875 10.11299133300781 6.054412841796875 11.59273719787598 C 6.054412841796875 12.74580383300781 6.404623031616211 13.84626960754395 7.056595802307129 14.77093601226807 L 6.577652454376221 15.92538833618164 C 3.979450702667236 16.38080024719238 1.99999988079071 18.65371131896973 1.99999988079071 21.3792667388916 C 1.99999988079071 21.3792667388916 1.99999988079071 21.3792667388916 1.99999988079071 21.3792667388916 C 1.99999988079071 21.3792667388916 1.99999988079071 21.3792667388916 1.99999988079071 21.3792667388916 C 1.99999988079071 24.10620498657227 3.980834484100342 26.37773323059082 6.577652454376221 26.8331470489502 L 7.056596755981445 27.98759651184082 C 5.542248249053955 30.14838600158691 5.74849796295166 33.15355682373047 7.676732063293457 35.08179473876953 C 9.537138938903809 36.94358444213867 12.66134834289551 37.18721008300781 14.77091598510742 35.70193099975586 L 15.92674922943115 36.18087387084961 C 16.38215827941895 38.77769470214844 18.65506744384766 40.7585334777832 21.38061714172363 40.7585334777832 C 24.10755157470703 40.7585334777832 26.37907600402832 38.77769470214844 26.83310317993164 36.18087387084961 L 27.98893547058105 35.70054626464844 C 30.14695167541504 37.21628189086914 33.15211486816406 37.01141738891602 35.0831184387207 35.08179473876953 C 36.12959671020508 34.03531265258789 36.70544052124023 32.64554214477539 36.70544052124023 31.16579627990723 C 36.70544052124023 30.01272964477539 36.35384368896484 28.91226387023926 35.7032585144043 27.98759651184082 L 36.18220138549805 26.8331470489502 C 38.77763366699219 26.37911605834961 40.75846862792969 24.10759162902832 40.75846862792969 21.3792667388916 C 40.75846862792969 21.38064956665039 40.75846862792969 21.38064956665039 40.75846862792969 21.3792667388916 C 40.75846862792969 21.3792667388916 40.75846862792969 21.3792667388916 40.75846862792969 21.3792667388916 Z M 35.2215461730957 24.15050315856934 C 34.66231536865234 24.15050315856934 34.15707397460938 24.48687171936035 33.9425163269043 25.00457572937012 L 32.82405471801758 27.70106315612793 C 32.60950088500977 28.2187671661377 32.72854232788086 28.81398773193359 33.12443161010742 29.20987701416016 C 33.64767456054688 29.73311805725098 33.93559265136719 30.42800140380859 33.93559265136719 31.16718292236328 C 33.93559265136719 31.90774536132813 33.64767456054688 32.60263442993164 33.12443161010742 33.12586975097656 C 32.04473114013672 34.20557403564453 30.28537368774414 34.20280456542969 29.20844268798828 33.12586975097656 C 28.81255340576172 32.72998046875 28.21733474731445 32.61093521118164 27.69963073730469 32.82549285888672 L 25.00176429748535 33.94395446777344 C 24.48406410217285 34.15850830078125 24.14769744873047 34.66375350952148 24.14769744873047 35.22298431396484 C 24.14769744873047 36.74979400634766 22.90604209899902 37.99145126342773 21.37923431396484 37.99145126342773 C 19.8524284362793 37.99145126342773 18.61077117919922 36.74979400634766 18.61077117919922 35.22298431396484 C 18.61077117919922 34.66375350952148 18.27301979064941 34.15712356567383 17.7567024230957 33.94395065307617 L 15.05745220184326 32.82549285888672 C 14.53836631774902 32.61093521118164 13.94591617584229 32.72998046875 13.54864025115967 33.12586975097656 C 12.50216197967529 34.17234802246094 10.68051338195801 34.17234802246094 9.634035110473633 33.12586975097656 C 8.55433464050293 32.04616546630859 8.55433464050293 30.28957366943359 9.634035110473633 29.20987129211426 C 10.02992534637451 28.8139820098877 10.14896965026855 28.2187614440918 9.934412956237793 27.70105743408203 L 8.815954208374023 25.00457000732422 C 8.601398468017578 24.48687171936035 8.096153259277344 24.15050315856934 7.536924362182617 24.15050315856934 C 6.010117053985596 24.15050315856934 4.768462181091309 22.90884590148926 4.768462181091309 21.38065338134766 C 4.768462181091309 21.38065338134766 4.768462181091309 21.38065338134766 4.768462181091309 21.38065338134766 C 4.768462181091309 21.38065338134766 4.768462181091309 21.38065338134766 4.768462181091309 21.38065338134766 C 4.768462181091309 19.85384368896484 6.010117053985596 18.61218643188477 7.536924362182617 18.61218643188477 C 8.096153259277344 18.61218643188477 8.601398468017578 18.27443313598633 8.815953254699707 17.75811386108398 L 9.934412002563477 15.05885982513428 C 10.14896869659424 14.54115676879883 10.0299243927002 13.94593620300293 9.634034156799316 13.55004501342773 C 9.110795021057129 13.02680492401123 8.822875022888184 12.33191967010498 8.822875022888184 11.59274005889893 C 8.822875022888184 10.85355854034424 9.110795021057129 10.1572904586792 9.634034156799316 9.634049415588379 C 10.71373462677002 8.554347991943359 12.47032451629639 8.554347991943359 13.55002403259277 9.634049415588379 C 13.94591426849365 10.02994060516357 14.54113292694092 10.14621639251709 15.05883598327637 9.934428215026855 L 17.7567024230957 8.815967559814453 C 18.27301979064941 8.601408958435059 18.61077117919922 8.096162796020508 18.61077117919922 7.536933422088623 C 18.61077117919922 6.010124206542969 19.8524284362793 4.768466949462891 21.37923431396484 4.768466949462891 C 22.90604209899902 4.768466949462891 24.14769744873047 6.010124206542969 24.14769744873047 7.536933422088623 C 24.14769744873047 8.096162796020508 24.48544883728027 8.601408958435059 25.00176811218262 8.815964698791504 L 27.70101928710938 9.934425354003906 C 28.21872329711914 10.14759731292725 28.81394195556641 10.03132152557373 29.20983123779297 9.63404655456543 C 30.25631141662598 8.587566375732422 32.07796096801758 8.587566375732422 33.12443542480469 9.63404655456543 C 34.20275115966797 10.71374893188477 34.20275115966797 12.47034072875977 33.12443542480469 13.5500431060791 C 32.72854614257813 13.94593334197998 32.60950088500977 14.54115295410156 32.82405853271484 15.05885696411133 L 33.94252014160156 17.75811195373535 C 34.15568542480469 18.27304649353027 34.66231536865234 18.61079978942871 35.2215461730957 18.61079978942871 C 36.74835205078125 18.61079978942871 37.99000549316406 19.85245704650879 37.99000549316406 21.3792667388916 C 37.99000549316406 21.3792667388916 37.99000549316406 21.3792667388916 37.99000549316406 21.3792667388916 C 37.99000549316406 21.3792667388916 37.99000549316406 21.3792667388916 37.99000549316406 21.3792667388916 C 37.99000549316406 22.90746116638184 36.74835205078125 24.15050315856934 35.2215461730957 24.15050315856934 Z"  /></Svg>
                    <Svg data-layer="3a8e7f13-7d80-43ce-a9f4-2daa1a424f92" style={styles.home_komponente81_gruppe3_settings_pfad16} preserveAspectRatio="none" viewBox="10.999999046325684 11 13.842315673828125 13.84234619140625" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 17.9211540222168 11 C 14.10483074188232 11 10.99999904632568 14.10483551025391 10.99999904632568 17.92116737365723 C 10.99999904632568 21.73749923706055 14.10483074188232 24.84233474731445 17.9211540222168 24.84233474731445 C 18.68524932861328 24.84233474731445 19.30538558959961 24.22358131408691 19.30538558959961 23.45810127258301 C 19.30538558959961 22.6926212310791 18.68524932861328 22.07386779785156 17.9211540222168 22.07386779785156 C 15.63163661956787 22.07386779785156 13.76846218109131 20.2106876373291 13.76846218109131 17.92116737365723 C 13.76846218109131 15.63164710998535 15.63163661956787 13.76846694946289 17.9211540222168 13.76846694946289 C 20.21067047119141 13.76846694946289 22.07384872436523 15.63164520263672 22.07384872436523 17.92116737365723 C 22.07384872436523 18.72679138183594 21.84406661987305 19.50749778747559 21.40803146362305 20.18023681640625 C 20.99137878417969 20.82113456726074 21.17409515380859 21.677978515625 21.81637954711914 22.09462928771973 C 22.45727920532227 22.51128578186035 23.31411743164063 22.3299503326416 23.73077011108398 21.68628120422363 C 24.45749282836914 20.5650520324707 24.84231185913086 19.26248931884766 24.84231185913086 17.92116737365723 C 24.84231185913086 14.10483551025391 21.73748016357422 11 17.9211540222168 11 Z"  /></Svg>
                </View>
                <View data-layer="16fdb937-f194-46d8-b1b8-0baf3867424b" style={styles.home_komponente81_gruppe3_home2}>
                    <Svg data-layer="d896119e-72b1-4d78-9583-5e3736fc1454" style={styles.home_komponente81_gruppe3_home2_pfad17} preserveAspectRatio="none" viewBox="0.988612711429596 1.0047225952148438 38.788719177246094 19.40374755859375" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 39.20455551147461 17.44952774047852 L 21.50863075256348 1.438928365707397 C 20.86716270446777 0.8599874973297119 19.89175987243652 0.8599872589111328 19.25029182434082 1.438928246498108 L 1.554365992546082 17.44952774047852 C 0.8562812805175781 18.07315254211426 0.7959173321723938 19.14460754394531 1.419540047645569 19.84269332885742 C 2.043162107467651 20.5407772064209 3.11461877822876 20.60114097595215 3.812703609466553 19.97751808166504 L 20.37946128845215 4.961259841918945 L 36.94622039794922 19.94380950927734 C 37.64430236816406 20.56975746154785 38.71764755249023 20.51128005981445 39.34359359741211 19.81319618225098 C 39.96953964233398 19.11511039733887 39.91106796264648 18.04176902770996 39.21298217773438 17.41582107543945 Z"  /></Svg>
                    <Svg data-layer="56aa7d03-3005-4b74-acdb-f446fc93c185" style={styles.home_komponente81_gruppe3_home2_pfad18} preserveAspectRatio="none" viewBox="4 26.000001907348633 33.706520080566406 17.6959228515625" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 36.02119827270508 26.00000190734863 C 35.09041976928711 26.00000190734863 34.33587265014648 26.75454902648926 34.33587265014648 27.68532943725586 L 34.33587265014648 40.32527160644531 L 27.59456825256348 40.32527160644531 L 27.59456825256348 31.05598068237305 C 27.59456825256348 30.12520027160645 26.84002113342285 29.37065505981445 25.90924263000488 29.37065505981445 L 15.79728412628174 29.37065505981445 C 14.86650371551514 29.37065505981445 14.11195755004883 30.12520217895508 14.11195755004883 31.05598068237305 L 14.11195755004883 40.32527160644531 L 7.370652675628662 40.32527160644531 L 7.370652675628662 27.68532943725586 C 7.370652675628662 26.75454902648926 6.616106033325195 26.00000190734863 5.68532657623291 26.00000190734863 C 4.754546642303467 26.00000190734863 4 26.75454902648926 4 27.68532943725586 L 4 42.01059722900391 C 4 42.94137954711914 4.754546642303467 43.6959228515625 5.68532657623291 43.6959228515625 L 36.02119827270508 43.6959228515625 C 36.95197677612305 43.6959228515625 37.70652389526367 42.94137954711914 37.70652389526367 42.01059722900391 L 37.70652389526367 27.68532943725586 C 37.70652389526367 26.75454902648926 36.95197677612305 26.00000190734863 36.02119827270508 26.00000190734863 Z M 17.48261070251465 40.32527160644531 L 17.48261070251465 32.74130249023438 L 24.22391700744629 32.74130249023438 L 24.22391700744629 40.32527160644531 L 17.48261070251465 40.32527160644531 Z"  /></Svg>
                </View>
            </View>
        </View>
    </ScrollView>
    );
  }
}

Home.propTypes = {

}

Home.defaultProps = {

}


const styles = StyleSheet.create({
  "home": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "home_bgHeader": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 86, 80, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 375,
    "height": 263,
    "left": 0,
    "top": 0
  },
  "home_gruppe6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 779.98,
    "height": 290.99,
    "left": 11.01,
    "top": 56
  },
  "home_gruppe6_scanAndScore": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 42,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "LEMON MILK",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 259,
    "height": 111,
    "left": 19.99,
    "top": 0
  },
  "home_gruppe6_gruppe5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 779.98,
    "height": 156.99,
    "left": 0,
    "top": 134
  },
  "home_gruppe6_gruppe5_tips": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 779.98,
    "height": 138.98,
    "left": 0,
    "top": 18.01
  },
  "home_gruppe6_gruppe5_tips_gruppe1c1fed492": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 111,
    "height": 111,
    "left": 13.99,
    "top": 10.99
  },
  "home_gruppe6_gruppe5_tips_gruppe1c1fed492_rechteck26e5a9917": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 27,
    "borderTopRightRadius": 27,
    "borderBottomLeftRadius": 27,
    "borderBottomRightRadius": 27,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 111,
    "height": 111,
    "left": 0,
    "top": 0
  },
  "home_gruppe6_gruppe5_tips_gruppe1c1fed492_bananas6986081920e8eaff6e": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 18,
    "borderTopRightRadius": 18,
    "borderBottomLeftRadius": 18,
    "borderBottomRightRadius": 18,
    "width": 91,
    "height": 91,
    "left": 10,
    "top": 10
  },
  "home_gruppe6_gruppe5_tips_gruppe1b4f0c08c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 111,
    "height": 111,
    "left": 172.99,
    "top": 10.99
  },
  "home_gruppe6_gruppe5_tips_gruppe1b4f0c08c_rechteck2dd09ef58": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 27,
    "borderTopRightRadius": 27,
    "borderBottomLeftRadius": 27,
    "borderBottomRightRadius": 27,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 111,
    "height": 111,
    "left": 0,
    "top": 0
  },
  "home_gruppe6_gruppe5_tips_gruppe1b4f0c08c_apple17767441920": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 18,
    "borderTopRightRadius": 18,
    "borderBottomLeftRadius": 18,
    "borderBottomRightRadius": 18,
    "width": 91,
    "height": 91,
    "left": 10,
    "top": 10
  },
  "home_gruppe6_gruppe5_tips_gruppe1667ed5af": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 111,
    "height": 111,
    "left": 331.99,
    "top": 10.99
  },
  "home_gruppe6_gruppe5_tips_gruppe1667ed5af_rechteck26e38221a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 27,
    "borderTopRightRadius": 27,
    "borderBottomLeftRadius": 27,
    "borderBottomRightRadius": 27,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 111,
    "height": 111,
    "left": 0,
    "top": 0
  },
  "home_gruppe6_gruppe5_tips_gruppe1667ed5af_bananas698608192031e56373": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 18,
    "borderTopRightRadius": 18,
    "borderBottomLeftRadius": 18,
    "borderBottomRightRadius": 18,
    "width": 91,
    "height": 91,
    "left": 10,
    "top": 10
  },
  "home_gruppe6_gruppe5_tips_gruppe1ee87136b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 111,
    "height": 111,
    "left": 490.99,
    "top": 10.99
  },
  "home_gruppe6_gruppe5_tips_gruppe1ee87136b_rechteck2ca2f526a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 27,
    "borderTopRightRadius": 27,
    "borderBottomLeftRadius": 27,
    "borderBottomRightRadius": 27,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 111,
    "height": 111,
    "left": 0,
    "top": 0
  },
  "home_gruppe6_gruppe5_tips_gruppe1ee87136b_bananas6986081920a7277893": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 18,
    "borderTopRightRadius": 18,
    "borderBottomLeftRadius": 18,
    "borderBottomRightRadius": 18,
    "width": 91,
    "height": 91,
    "left": 10,
    "top": 10
  },
  "home_gruppe6_gruppe5_tips_gruppe1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 111,
    "height": 111,
    "left": 649.99,
    "top": 10.99
  },
  "home_gruppe6_gruppe5_tips_gruppe1_rechteck2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 27,
    "borderTopRightRadius": 27,
    "borderBottomLeftRadius": 27,
    "borderBottomRightRadius": 27,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 111,
    "height": 111,
    "left": 0,
    "top": 0
  },
  "home_gruppe6_gruppe5_tips_gruppe1_bananas6986081920": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 18,
    "borderTopRightRadius": 18,
    "borderBottomLeftRadius": 18,
    "borderBottomRightRadius": 18,
    "width": 91,
    "height": 91,
    "left": 10,
    "top": 10
  },
  "home_gruppe6_gruppe5_recentPosts": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 239, 239, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Raleway",
    "textAlign": "left",
    "lineHeight": 25,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 110,
    "height": 28,
    "left": 21.99,
    "top": -3.5
  },
  "home_gruppe7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 315,
    "height": 316,
    "left": 30,
    "top": 366
  },
  "home_gruppe7_barcodePlatzhalter": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 27,
    "borderTopRightRadius": 27,
    "borderBottomLeftRadius": 27,
    "borderBottomRightRadius": 27,
    "width": 179,
    "height": 173,
    "left": 68,
    "top": 25
  },
  "home_gruppe7_gruppe4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 315,
    "height": 316,
    "left": 0,
    "top": 0
  },
  "home_gruppe7_gruppe4_cameraWrapper": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 10,
    "borderTopColor": "rgba(0, 86, 80, 1)",
    "borderRightWidth": 10,
    "borderRightColor": "rgba(0, 86, 80, 1)",
    "borderBottomWidth": 10,
    "borderBottomColor": "rgba(0, 86, 80, 1)",
    "borderLeftWidth": 10,
    "borderLeftColor": "rgba(0, 86, 80, 1)",
    "borderTopLeftRadius": 37,
    "borderTopRightRadius": 37,
    "borderBottomLeftRadius": 37,
    "borderBottomRightRadius": 37,
    "width": 222,
    "height": 222,
    "left": 47,
    "top": 0
  },
  "home_gruppe7_gruppe4_enterbarcodetext": {
    "opacity": 0.800000011920929,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Raleway",
    "textAlign": "left",
    "lineHeight": 25,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 153,
    "height": 28,
    "left": 84,
    "top": 237.5
  },
  "home_gruppe7_gruppe4_gruppe2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 315,
    "height": 45,
    "left": 0,
    "top": 271
  },
  "home_gruppe7_gruppe4_gruppe2_rechteck3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 16,
    "borderTopRightRadius": 16,
    "borderBottomLeftRadius": 16,
    "borderBottomRightRadius": 16,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 315,
    "height": 45,
    "left": 0,
    "top": 0
  },
  "home_gruppe7_gruppe4_gruppe2_enterBarcode": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(188, 188, 188, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Open Sans",
    "textAlign": "left",
    "lineHeight": 25,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 115,
    "height": 30,
    "left": 30,
    "top": 10.5
  },
  "home_komponente81": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 93,
    "left": 0,
    "top": 719
  },
  "home_komponente81_menu": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 375,
    "height": 93,
    "left": 0,
    "top": 0
  },
  "home_komponente81_gruppe3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 242,
    "height": 46,
    "left": 66.5,
    "top": 5.5
  },
  "home_komponente81_gruppe3_history": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 46,
    "height": 46,
    "left": 98,
    "top": 0
  },
  "home_komponente81_gruppe3_history_layer2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 37.34,
    "height": 37.34,
    "left": 3.67,
    "top": 4.2
  },
  "home_komponente81_gruppe3_history_layer2_pfad10": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 37.34,
    "height": 34.47,
    "left": 0,
    "top": 2.87
  },
  "home_komponente81_gruppe3_history_layer2_pfad11": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 8.62,
    "height": 8.62,
    "left": 22.98,
    "top": 22.98
  },
  "home_komponente81_gruppe3_history_layer2_pfad12": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 37.34,
    "height": 2.87,
    "left": 0,
    "top": 11.49
  },
  "home_komponente81_gruppe3_history_layer2_pfad13": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 2.87,
    "height": 8.62,
    "left": 10.05,
    "top": 0
  },
  "home_komponente81_gruppe3_history_layer2_pfad14": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 2.87,
    "height": 8.62,
    "left": 24.41,
    "top": 0
  },
  "home_komponente81_gruppe3_history_frame": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 46,
    "height": 46,
    "left": 0,
    "top": 0
  },
  "home_komponente81_gruppe3_history_frame_rechteck4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 46,
    "height": 46,
    "left": 0,
    "top": 0
  },
  "home_komponente81_gruppe3_settings": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 38.76,
    "height": 38.76,
    "left": 203.24,
    "top": 4
  },
  "home_komponente81_gruppe3_settings_pfad15": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 38.76,
    "height": 38.76,
    "left": 0,
    "top": 0
  },
  "home_komponente81_gruppe3_settings_pfad16": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 13.84,
    "height": 13.84,
    "left": 12.46,
    "top": 12.46
  },
  "home_komponente81_gruppe3_home2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 38.79,
    "height": 38.76,
    "left": 0,
    "top": 4
  },
  "home_komponente81_gruppe3_home2_pfad17": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 38.79,
    "height": 19.4,
    "left": 0,
    "top": 0
  },
  "home_komponente81_gruppe3_home2_pfad18": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 33.71,
    "height": 17.7,
    "left": 2.54,
    "top": 21.06
  }
});