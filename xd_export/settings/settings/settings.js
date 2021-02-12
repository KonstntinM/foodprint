import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Settings extends Component {

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
    <ScrollView data-layer="bfa62cc4-ed51-466c-8c14-1380e4a69325" style={styles.settings}>
        <View data-layer="2b2d3d0e-022d-455b-9ac6-5f5e43c6f319" style={styles.settings_komponente83}>
            <View data-layer="d0f78019-8871-4118-b8e3-5e7a3942790e" style={styles.settings_komponente83_menu}></View>
            <View data-layer="eacd7636-cbb9-4ff9-a6a4-7ae3a279e049" style={styles.settings_komponente83_gruppe3}>
                <View data-layer="d89abfca-5675-46c0-92f0-921bb003e0ac" style={styles.settings_komponente83_gruppe3_history}>
                    <View data-layer="2c535573-8915-442b-9f6f-708d353807d3" style={styles.settings_komponente83_gruppe3_history_layer2}>
                        <Svg data-layer="b665865c-dbbc-4555-9042-43112f1092e1" style={styles.settings_komponente83_gruppe3_history_layer2_pfad10} preserveAspectRatio="none" viewBox="2.999999761581421 4.999998092651367 37.3388671875 34.4666748046875" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 33.15829849243164 39.46669006347656 L 10.18054580688477 39.46669006347656 C 6.214839935302734 39.46669006347656 2.999999761581421 36.2518424987793 2.999999761581421 32.28612899780273 L 2.999999761581421 12.1805591583252 C 2.999999761581421 8.214845657348633 6.214841365814209 4.999998569488525 10.18054866790771 4.999999523162842 L 33.15829849243164 4.999999523162842 C 37.12400054931641 4.999999523162842 40.33884811401367 8.214846611022949 40.33884811401367 12.1805591583252 L 40.33884811401367 32.28612899780273 C 40.33884811401367 36.2518424987793 37.12400054931641 39.46669006347656 33.15829849243164 39.46669006347656 Z M 10.18054580688477 7.872223854064941 C 7.801122188568115 7.872223854064941 5.872217655181885 9.801133155822754 5.872218608856201 12.18056106567383 L 5.872218608856201 32.28612899780273 C 5.872218608856201 34.66555786132813 7.801123142242432 36.59446334838867 10.18054580688477 36.59446334838867 L 33.15829849243164 36.59446334838867 C 35.53772354125977 36.59446334838867 37.46662902832031 34.66555786132813 37.46662902832031 32.28612899780273 L 37.46662902832031 12.1805591583252 C 37.46662902832031 9.801130294799805 35.53772354125977 7.872223854064941 33.15829849243164 7.872223854064941 L 10.18054580688477 7.872223854064941 Z"  /></Svg>
                        <Svg data-layer="717362da-1696-471e-8f63-125f17ec535e" style={styles.settings_komponente83_gruppe3_history_layer2_pfad11} preserveAspectRatio="none" viewBox="18.999996185302734 18.999998092651367 8.61669921875 8.61669921875" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 26.18054389953613 27.61666870117188 L 20.43610572814941 27.61666870117188 C 19.64296531677246 27.61666870117188 18.99999618530273 26.97369956970215 18.99999618530273 26.1805591583252 L 18.99999618530273 20.43611145019531 C 18.99999618530273 19.64296913146973 19.64296531677246 18.99999809265137 20.43610572814941 18.99999809265137 L 26.18054389953613 18.99999809265137 C 26.97368621826172 18.99999809265137 27.61665153503418 19.64296913146973 27.61665153503418 20.43611145019531 L 27.61665153503418 26.1805591583252 C 27.61665153503418 26.97369956970215 26.97368621826172 27.61666870117188 26.18054389953613 27.61666870117188 Z M 21.87221527099609 24.74444580078125 L 24.74443435668945 24.74444580078125 L 24.74443435668945 21.87222290039063 L 21.87221527099609 21.87222290039063 L 21.87221527099609 24.74444580078125 Z"  /></Svg>
                        <Svg data-layer="952874ac-89d8-4f40-8f7f-815da5880fbd" style={styles.settings_komponente83_gruppe3_history_layer2_pfad12} preserveAspectRatio="none" viewBox="2.999999761581421 10.999999046325684 37.3388671875 2.8721923828125" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 38.90274047851563 13.87222194671631 L 4.436108589172363 13.87222194671631 C 3.642967700958252 13.87222194671631 2.999999761581421 13.2292537689209 2.999999761581421 12.43611145019531 C 2.999999761581421 11.64296722412109 3.642967700958252 10.99999904632568 4.436108589172363 10.99999904632568 L 38.90274047851563 10.99999904632568 C 39.69588088989258 10.99999904632568 40.33884811401367 11.64297103881836 40.33884811401367 12.43611145019531 C 40.33884811401367 13.2292537689209 39.69588088989258 13.87222194671631 38.90274047851563 13.87222194671631 Z"  /></Svg>
                        <Svg data-layer="a9b04c4a-753a-4501-89fe-fcefbc1efd83" style={styles.settings_komponente83_gruppe3_history_layer2_pfad13} preserveAspectRatio="none" viewBox="9.999998092651367 2.999999761581421 2.8721923828125 8.61669921875" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 11.43610763549805 11.61667060852051 C 10.64296531677246 11.61667060852051 9.999998092651367 10.97370052337646 9.999998092651367 10.18055820465088 L 9.999998092651367 4.436111450195313 C 9.999998092651367 3.642969131469727 10.64296722412109 2.999999761581421 11.43610763549805 2.999999761581421 C 12.22924995422363 2.999999761581421 12.87221622467041 3.642969131469727 12.87221622467041 4.436111450195313 L 12.87221622467041 10.18055820465088 C 12.87221622467041 10.97370052337646 12.229248046875 11.61667060852051 11.43610763549805 11.61667060852051 Z"  /></Svg>
                        <Svg data-layer="10c53d6f-cc39-4930-bf6f-8dbef96a6e65" style={styles.settings_komponente83_gruppe3_history_layer2_pfad14} preserveAspectRatio="none" viewBox="19.999996185302734 2.999999761581421 2.8721923828125 8.61669921875" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 21.43610572814941 11.61667060852051 C 20.64296913146973 11.61667060852051 19.99999618530273 10.97370052337646 19.99999618530273 10.18055820465088 L 19.99999618530273 4.436111450195313 C 19.99999618530273 3.642969131469727 20.64296913146973 2.999999761581421 21.43610572814941 2.999999761581421 C 22.22924995422363 2.999999761581421 22.87221527099609 3.642969131469727 22.87221527099609 4.436111450195313 L 22.87221527099609 10.18055820465088 C 22.87221527099609 10.97370052337646 22.22924995422363 11.61667060852051 21.43610572814941 11.61667060852051 Z"  /></Svg>
                    </View>
                    <View data-layer="30217ada-c5c1-4421-b9a4-5dd46ae746e5" style={styles.settings_komponente83_gruppe3_history_frame}>
                        <View data-layer="be78adab-fc99-4840-813b-42bbebc6ade7" style={styles.settings_komponente83_gruppe3_history_frame_rechteck4}></View>
                    </View>
                </View>
                <View data-layer="c1034bbc-2e1d-4d7e-8231-14cd8da9b63c" style={styles.settings_komponente83_gruppe3_settings5e8c2553}>
                    <Svg data-layer="9dfd320a-31e6-4ace-aa87-0fa702356daa" style={styles.settings_komponente83_gruppe3_settings5e8c2553_pfad15} preserveAspectRatio="none" viewBox="1.9999998807907104 2 38.7584228515625 38.758544921875" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 40.75846862792969 21.3792667388916 C 40.75846862792969 18.65371131896973 38.77763366699219 16.38080024719238 36.18081665039063 15.92538642883301 L 35.70048904418945 14.76955127716064 C 37.21622085571289 12.61014747619629 37.00858688354492 9.604976654052734 35.08173751831055 7.676740169525146 C 33.21856307983398 5.813561916351318 30.09988975524902 5.571321487426758 27.9875545501709 7.056603908538818 L 26.83172225952148 6.577658653259277 C 26.37631034851074 3.980838060379028 24.10478591918945 2 21.37923431396484 2 C 18.65368270874023 2 16.38077545166016 3.980838060379028 15.92536449432373 6.577660083770752 L 14.76953125 7.056605339050293 C 12.61289978027344 5.543637752532959 9.604965209960938 5.748504638671875 7.676731109619141 7.676741123199463 C 6.630252838134766 8.721837043762207 6.054412841796875 10.11299133300781 6.054412841796875 11.59273719787598 C 6.054412841796875 12.74580383300781 6.404623031616211 13.84626960754395 7.056595802307129 14.77093601226807 L 6.577652454376221 15.92538833618164 C 3.979450702667236 16.38080024719238 1.99999988079071 18.65371131896973 1.99999988079071 21.3792667388916 C 1.99999988079071 21.3792667388916 1.99999988079071 21.3792667388916 1.99999988079071 21.3792667388916 C 1.99999988079071 21.3792667388916 1.99999988079071 21.3792667388916 1.99999988079071 21.3792667388916 C 1.99999988079071 24.10620498657227 3.980834484100342 26.37773323059082 6.577652454376221 26.8331470489502 L 7.056596755981445 27.98759651184082 C 5.542248249053955 30.14838600158691 5.74849796295166 33.15355682373047 7.676732063293457 35.08179473876953 C 9.537138938903809 36.94358444213867 12.66134834289551 37.18721008300781 14.77091598510742 35.70193099975586 L 15.92674922943115 36.18087387084961 C 16.38215827941895 38.77769470214844 18.65506744384766 40.7585334777832 21.38061714172363 40.7585334777832 C 24.10755157470703 40.7585334777832 26.37907600402832 38.77769470214844 26.83310317993164 36.18087387084961 L 27.98893547058105 35.70054626464844 C 30.14695167541504 37.21628189086914 33.15211486816406 37.01141738891602 35.0831184387207 35.08179473876953 C 36.12959671020508 34.03531265258789 36.70544052124023 32.64554214477539 36.70544052124023 31.16579627990723 C 36.70544052124023 30.01272964477539 36.35384368896484 28.91226387023926 35.7032585144043 27.98759651184082 L 36.18220138549805 26.8331470489502 C 38.77763366699219 26.37911605834961 40.75846862792969 24.10759162902832 40.75846862792969 21.3792667388916 C 40.75846862792969 21.38064956665039 40.75846862792969 21.38064956665039 40.75846862792969 21.3792667388916 C 40.75846862792969 21.3792667388916 40.75846862792969 21.3792667388916 40.75846862792969 21.3792667388916 Z M 35.2215461730957 24.15050315856934 C 34.66231536865234 24.15050315856934 34.15707397460938 24.48687171936035 33.9425163269043 25.00457572937012 L 32.82405471801758 27.70106315612793 C 32.60950088500977 28.2187671661377 32.72854232788086 28.81398773193359 33.12443161010742 29.20987701416016 C 33.64767456054688 29.73311805725098 33.93559265136719 30.42800140380859 33.93559265136719 31.16718292236328 C 33.93559265136719 31.90774536132813 33.64767456054688 32.60263442993164 33.12443161010742 33.12586975097656 C 32.04473114013672 34.20557403564453 30.28537368774414 34.20280456542969 29.20844268798828 33.12586975097656 C 28.81255340576172 32.72998046875 28.21733474731445 32.61093521118164 27.69963073730469 32.82549285888672 L 25.00176429748535 33.94395446777344 C 24.48406410217285 34.15850830078125 24.14769744873047 34.66375350952148 24.14769744873047 35.22298431396484 C 24.14769744873047 36.74979400634766 22.90604209899902 37.99145126342773 21.37923431396484 37.99145126342773 C 19.8524284362793 37.99145126342773 18.61077117919922 36.74979400634766 18.61077117919922 35.22298431396484 C 18.61077117919922 34.66375350952148 18.27301979064941 34.15712356567383 17.7567024230957 33.94395065307617 L 15.05745220184326 32.82549285888672 C 14.53836631774902 32.61093521118164 13.94591617584229 32.72998046875 13.54864025115967 33.12586975097656 C 12.50216197967529 34.17234802246094 10.68051338195801 34.17234802246094 9.634035110473633 33.12586975097656 C 8.55433464050293 32.04616546630859 8.55433464050293 30.28957366943359 9.634035110473633 29.20987129211426 C 10.02992534637451 28.8139820098877 10.14896965026855 28.2187614440918 9.934412956237793 27.70105743408203 L 8.815954208374023 25.00457000732422 C 8.601398468017578 24.48687171936035 8.096153259277344 24.15050315856934 7.536924362182617 24.15050315856934 C 6.010117053985596 24.15050315856934 4.768462181091309 22.90884590148926 4.768462181091309 21.38065338134766 C 4.768462181091309 21.38065338134766 4.768462181091309 21.38065338134766 4.768462181091309 21.38065338134766 C 4.768462181091309 21.38065338134766 4.768462181091309 21.38065338134766 4.768462181091309 21.38065338134766 C 4.768462181091309 19.85384368896484 6.010117053985596 18.61218643188477 7.536924362182617 18.61218643188477 C 8.096153259277344 18.61218643188477 8.601398468017578 18.27443313598633 8.815953254699707 17.75811386108398 L 9.934412002563477 15.05885982513428 C 10.14896869659424 14.54115676879883 10.0299243927002 13.94593620300293 9.634034156799316 13.55004501342773 C 9.110795021057129 13.02680492401123 8.822875022888184 12.33191967010498 8.822875022888184 11.59274005889893 C 8.822875022888184 10.85355854034424 9.110795021057129 10.1572904586792 9.634034156799316 9.634049415588379 C 10.71373462677002 8.554347991943359 12.47032451629639 8.554347991943359 13.55002403259277 9.634049415588379 C 13.94591426849365 10.02994060516357 14.54113292694092 10.14621639251709 15.05883598327637 9.934428215026855 L 17.7567024230957 8.815967559814453 C 18.27301979064941 8.601408958435059 18.61077117919922 8.096162796020508 18.61077117919922 7.536933422088623 C 18.61077117919922 6.010124206542969 19.8524284362793 4.768466949462891 21.37923431396484 4.768466949462891 C 22.90604209899902 4.768466949462891 24.14769744873047 6.010124206542969 24.14769744873047 7.536933422088623 C 24.14769744873047 8.096162796020508 24.48544883728027 8.601408958435059 25.00176811218262 8.815964698791504 L 27.70101928710938 9.934425354003906 C 28.21872329711914 10.14759731292725 28.81394195556641 10.03132152557373 29.20983123779297 9.63404655456543 C 30.25631141662598 8.587566375732422 32.07796096801758 8.587566375732422 33.12443542480469 9.63404655456543 C 34.20275115966797 10.71374893188477 34.20275115966797 12.47034072875977 33.12443542480469 13.5500431060791 C 32.72854614257813 13.94593334197998 32.60950088500977 14.54115295410156 32.82405853271484 15.05885696411133 L 33.94252014160156 17.75811195373535 C 34.15568542480469 18.27304649353027 34.66231536865234 18.61079978942871 35.2215461730957 18.61079978942871 C 36.74835205078125 18.61079978942871 37.99000549316406 19.85245704650879 37.99000549316406 21.3792667388916 C 37.99000549316406 21.3792667388916 37.99000549316406 21.3792667388916 37.99000549316406 21.3792667388916 C 37.99000549316406 21.3792667388916 37.99000549316406 21.3792667388916 37.99000549316406 21.3792667388916 C 37.99000549316406 22.90746116638184 36.74835205078125 24.15050315856934 35.2215461730957 24.15050315856934 Z"  /></Svg>
                    <Svg data-layer="19ac8827-26d1-4099-a5b1-099e7361840b" style={styles.settings_komponente83_gruppe3_settings5e8c2553_pfad16} preserveAspectRatio="none" viewBox="10.999999046325684 11 13.84228515625 13.84234619140625" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 17.9211540222168 11 C 14.10483074188232 11 10.99999904632568 14.10483551025391 10.99999904632568 17.92116737365723 C 10.99999904632568 21.73749923706055 14.10483074188232 24.84233474731445 17.9211540222168 24.84233474731445 C 18.68524932861328 24.84233474731445 19.30538558959961 24.22358131408691 19.30538558959961 23.45810127258301 C 19.30538558959961 22.6926212310791 18.68524932861328 22.07386779785156 17.9211540222168 22.07386779785156 C 15.63163661956787 22.07386779785156 13.76846218109131 20.2106876373291 13.76846218109131 17.92116737365723 C 13.76846218109131 15.63164710998535 15.63163661956787 13.76846694946289 17.9211540222168 13.76846694946289 C 20.21067047119141 13.76846694946289 22.07384872436523 15.63164520263672 22.07384872436523 17.92116737365723 C 22.07384872436523 18.72679138183594 21.84406661987305 19.50749778747559 21.40803146362305 20.18023681640625 C 20.99137878417969 20.82113456726074 21.17409515380859 21.677978515625 21.81637954711914 22.09462928771973 C 22.45727920532227 22.51128578186035 23.31411743164063 22.3299503326416 23.73077011108398 21.68628120422363 C 24.45749282836914 20.5650520324707 24.84231185913086 19.26248931884766 24.84231185913086 17.92116737365723 C 24.84231185913086 14.10483551025391 21.73748016357422 11 17.9211540222168 11 Z"  /></Svg>
                </View>
                <View data-layer="8ed34fc4-9090-422c-a8f3-5465e5309dbc" style={styles.settings_komponente83_gruppe3_home2}>
                    <Svg data-layer="c6dce450-e595-42ba-917b-d73e18c2671a" style={styles.settings_komponente83_gruppe3_home2_pfad17} preserveAspectRatio="none" viewBox="0.988612711429596 1.0047225952148438 38.7886962890625 19.40374755859375" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 39.20455551147461 17.44952774047852 L 21.50863075256348 1.438928365707397 C 20.86716270446777 0.8599874973297119 19.89175987243652 0.8599872589111328 19.25029182434082 1.438928246498108 L 1.554365992546082 17.44952774047852 C 0.8562812805175781 18.07315254211426 0.7959173321723938 19.14460754394531 1.419540047645569 19.84269332885742 C 2.043162107467651 20.5407772064209 3.11461877822876 20.60114097595215 3.812703609466553 19.97751808166504 L 20.37946128845215 4.961259841918945 L 36.94622039794922 19.94380950927734 C 37.64430236816406 20.56975746154785 38.71764755249023 20.51128005981445 39.34359359741211 19.81319618225098 C 39.96953964233398 19.11511039733887 39.91106796264648 18.04176902770996 39.21298217773438 17.41582107543945 Z"  /></Svg>
                    <Svg data-layer="8ce73155-fd64-4cc1-b893-0a65e0361b3b" style={styles.settings_komponente83_gruppe3_home2_pfad18} preserveAspectRatio="none" viewBox="4 26.000001907348633 33.70654296875 17.6959228515625" fill="rgba(94, 94, 94, 1)"><SvgPath d="M 36.02119827270508 26.00000190734863 C 35.09041976928711 26.00000190734863 34.33587265014648 26.75454902648926 34.33587265014648 27.68532943725586 L 34.33587265014648 40.32527160644531 L 27.59456825256348 40.32527160644531 L 27.59456825256348 31.05598068237305 C 27.59456825256348 30.12520027160645 26.84002113342285 29.37065505981445 25.90924263000488 29.37065505981445 L 15.79728412628174 29.37065505981445 C 14.86650371551514 29.37065505981445 14.11195755004883 30.12520217895508 14.11195755004883 31.05598068237305 L 14.11195755004883 40.32527160644531 L 7.370652675628662 40.32527160644531 L 7.370652675628662 27.68532943725586 C 7.370652675628662 26.75454902648926 6.616106033325195 26.00000190734863 5.68532657623291 26.00000190734863 C 4.754546642303467 26.00000190734863 4 26.75454902648926 4 27.68532943725586 L 4 42.01059722900391 C 4 42.94137954711914 4.754546642303467 43.6959228515625 5.68532657623291 43.6959228515625 L 36.02119827270508 43.6959228515625 C 36.95197677612305 43.6959228515625 37.70652389526367 42.94137954711914 37.70652389526367 42.01059722900391 L 37.70652389526367 27.68532943725586 C 37.70652389526367 26.75454902648926 36.95197677612305 26.00000190734863 36.02119827270508 26.00000190734863 Z M 17.48261070251465 40.32527160644531 L 17.48261070251465 32.74130249023438 L 24.22391700744629 32.74130249023438 L 24.22391700744629 40.32527160644531 L 17.48261070251465 40.32527160644531 Z"  /></Svg>
                </View>
            </View>
        </View>
        <View data-layer="196e32a9-4fd0-44cf-a312-b97c504079d6" style={styles.settings_bgHeader}></View>
        <Text data-layer="bbb2955e-a99c-4033-95c5-2e3191b9a00a" style={styles.settings_settings8157e995}>Settings</Text>
    </ScrollView>
    );
  }
}

Settings.propTypes = {

}

Settings.defaultProps = {

}


const styles = StyleSheet.create({
  "settings": {
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
  "settings_komponente83": {
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
  "settings_komponente83_menu": {
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
  "settings_komponente83_gruppe3": {
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
  "settings_komponente83_gruppe3_history": {
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
  "settings_komponente83_gruppe3_history_layer2": {
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
  "settings_komponente83_gruppe3_history_layer2_pfad10": {
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
  "settings_komponente83_gruppe3_history_layer2_pfad11": {
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
  "settings_komponente83_gruppe3_history_layer2_pfad12": {
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
  "settings_komponente83_gruppe3_history_layer2_pfad13": {
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
  "settings_komponente83_gruppe3_history_layer2_pfad14": {
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
  "settings_komponente83_gruppe3_history_frame": {
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
  "settings_komponente83_gruppe3_history_frame_rechteck4": {
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
  "settings_komponente83_gruppe3_settings5e8c2553": {
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
  "settings_komponente83_gruppe3_settings5e8c2553_pfad15": {
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
  "settings_komponente83_gruppe3_settings5e8c2553_pfad16": {
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
  "settings_komponente83_gruppe3_home2": {
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
  "settings_komponente83_gruppe3_home2_pfad17": {
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
  "settings_komponente83_gruppe3_home2_pfad18": {
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
  },
  "settings_bgHeader": {
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
    "height": 181,
    "left": 0,
    "top": 0
  },
  "settings_settings8157e995": {
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
    "width": 220,
    "height": 55,
    "left": 35,
    "top": 96
  }
});