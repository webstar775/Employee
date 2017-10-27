import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactLoading from 'react-loading'
import AlertContainer from 'react-alert'

import Header from '../../../components/Header'
import TagList from '../../../components/TagList'
import Images from '../../../themes/images'
import { 
    Wrapper,
    Content,
    FieldWrapper, 
    ButtonWrapper,
    Button,
    Input,
    AutoSuggest, 
    Heading, 
    SubHeading, 
    TagWrapper, 
    Img, 
    Navigation,
    PrevButton, 
    NavigationButton, 
    UnderLine,
    TextFieldWrapper,
    FlexWrapper,
    AddButton,
    IconWrapper,
    SocialImg } from './Style'
import { getSubmitionData, postSubmitionData } from '../../../actions/talent'
import * as Validate from '../../../constants/validate'
import { cities } from '../../../constants/data'

const styles = {
    floatingLabelStyle: {
      color: '#565252'
    },
    floatingLabelShrinkStyle: {                
        display: 'none'
    }
}

class Submition extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: '',
            locations: this.props.locations,
            beverage: this.props.beverage,
            status: this.props.status,
            urls: this.props.social,
            url: '',
            isValidate: false,
            isLoading: false,      
            google: false,
            facebook: false,
            linkedin: false,
            behance: false,
            git: false,
            isHighlight: false      
        }
    }
    componentWillMount() {
        let socialType        
        if(this.props.social){
            this.props.social.map(url => {
                if(url.indexOf('github') !== -1) socialType = 'git'
                if(url.indexOf('google') !== -1) socialType = 'google'
                if(url.indexOf('facebook') !== -1) socialType = 'facebook'
                if(url.indexOf('linkedin') !== -1) socialType = 'linkedin'
                if(url.indexOf('behance') !== -1) socialType = 'behance'                
                this.setState({
                    [socialType]: true
                })
                return socialType
            })         
                
        }        
    }

    addLocation = (text) => {        
        let temp = this.state.locations.slice()
        temp.push(text)
        this.setState({ locations: temp })        
    }

    removeLocation = (index) => {
        let temp = this.state.locations.slice()
        temp.splice(index, 1)
        this.setState({ locations: temp })
    }

    getBeverage = (beverage) => {        
        this.setState({
            beverage: beverage
        })
    }

    getStatus = (num) => {        
        this.setState({
            status: num
        })
    }

    getText = (e) => {               
        const { location } = this.state
        if(e.target.value.length >= 2){            
            this.setState({ location: e.target.value })
        } 
        if(e.keyCode === 8 && e.target.value.length < 5){
            console.log('eeee', e.target.value.length)
            this.setState({ location: '', isHighlight: false })
        }          
        if(e.keyCode === 13 && e.target.value) {                        
            this.addLocation(e.target.value)  
            this.setState({ location: '', isHighlight: false })
            e.target.value = ''              
        }
        if(e.keyCode === 40 && location.length >= 3){
            this.setState({ isHighlight: true })
            cities.map(city => {
                if(city.toLowerCase().indexOf(location.toLowerCase()) !== -1){
                    e.target.value = city
                }
                return true
            })
        }
    }

    getUrl = (e) => {      
        const { value } = e.target          
        this.setState({
            isValidate: Validate.socialValidate(value),
            url: value
        })
    }

    addUrl = () => {
        let socialType
        const { url, urls } = this.state
        let temp = urls.slice()
        temp.push(url)
        temp.map(url => {
            if(url.indexOf('github') !== -1) socialType = 'git'
            if(url.indexOf('google') !== -1) socialType = 'google'
            if(url.indexOf('facebook') !== -1) socialType = 'facebook'
            if(url.indexOf('linkedin') !== -1) socialType = 'linkedin'
            if(url.indexOf('behance') !== -1) socialType = 'behance'
            this.setState({
                [socialType]: true
            })
            return socialType
        })         
        this.setState({
            urls: temp,
            isValidate: false,            
        })        
        this.urlInput.input.value = 'https://'
        this.urlInput.focus()
    }

    prevPageNavigation = (path) => {
        browserHistory.push(path)
    }

    nextPageNavigation = (path) => {
        const obj = { 
            ProfileId: this.props.profileId,           
            Locations: this.state.locations,
            Beverage: this.state.beverage,
            Social: this.state.urls,
            Status: this.state.status
        }
        this.setState({ isLoading: true })        
          
        this.props.actions.postSubmitionData('Profile/Signup3', obj)
            .then(() => {      
                this.props.actions.getSubmitionData(obj)          
                setTimeout(() => {
                    browserHistory.push(path)
                },2000)   
            }).catch(() => {
                setTimeout(() => {
                    this.setState({ isLoading: false })
                    alert("Failed!")                    
                }, 2000) 
            })         
    }

    alertOptions = {
        offset: 14,
        position: 'bottom right',
        theme: 'light',
        time: 0,
        transition: 'scale'
    }
     
    showAlert = () => {
        this.msg.info('Please fill out all fields.', {
            time: 0,
            type: 'info',
        })
    }

    render() {        
        const { locations, beverage, status, isValidate, isLoading, location } = this.state             
        console.log('loc', location)
        return (
            <Wrapper>
                <Header visible percent={3} save/>
                <Content>
                    <Heading>Almost there...</Heading>
                    <FieldWrapper>
                        <SubHeading>Where would you like to work?</SubHeading> 
                        <Input>
                            <MuiThemeProvider>
                                <TextField   
                                    ref={(input) => {this.tagInput = input}} 
                                    onKeyDown={this.getText} 
                                    onBlur={this.blur}                                                      
                                    floatingLabelText="Type city"
                                    floatingLabelStyle={styles.floatingLabelStyle}  
                                    floatingLabelShrinkStyle={styles.floatingLabelShrinkStyle}                                
                                    underlineShow={false}
                                />              
                            </MuiThemeProvider>                         
                        </Input>                                            
                        <UnderLine ></UnderLine> 
                        <AutoSuggest active={this.state.isHighlight}> 
                        { location.length >= 3 && cities.map((city, index) => {     
                            let temp                       
                            if(city.toLowerCase().indexOf(location.toLowerCase()) !== -1 ){
                                temp = <p key={index}>{ city }</p>
                            }
                            return temp
                        })}         
                        </AutoSuggest>           
                    </FieldWrapper>
                    <TagWrapper>
                        <TagList data={ locations } removeTag={(index) => this.removeLocation(index)} />
                    </TagWrapper>
                    <FieldWrapper>
                        <SubHeading>What is your preffered coffee?</SubHeading>                        
                        <ButtonWrapper>
                            <Button active={beverage === 'Espresso'} onClick={() => this.getBeverage('Espresso')}>Espresso</Button>
                            <Button active={beverage === 'Cappucino'} onClick={() => this.getBeverage('Cappucino')}>Cappucino</Button>
                            <Button active={beverage === 'Flat white'} onClick={() => this.getBeverage('Flat white')}>Flat white</Button>                                
                            <Button active={beverage === 'Cortado'} onClick={() => this.getBeverage('Cortado')}>Cortado</Button>
                            <Button active={beverage === 'Caffe latte'} onClick={() => this.getBeverage('Caffe latte')}>Caffe latte</Button>
                            <Button active={beverage === 'Macchiato'} onClick={() => this.getBeverage('Macchiato')}>Macchiato</Button>                 
                            <Button active={beverage === 'Tea'} onClick={() => this.getBeverage('Tea')}>Tea</Button>                 
                            <Button active={beverage === 'Undecided'} onClick={() => this.getBeverage('Undecided')}>Undecided<img src={Images.remove} alt="" /></Button>                 
                        </ButtonWrapper>
                    </FieldWrapper>
                    <FieldWrapper>
                        <SubHeading>Please help us understand your profile</SubHeading>                                                                                     
                        <IconWrapper>
                            <SocialImg git={this.state.git} src={Images.github} alt="github" />
                            <SocialImg google={this.state.google} src={Images.google1} alt="google" />
                            <SocialImg facebook={this.state.facebook} src={Images.facebook} alt="facebook" />
                            <SocialImg linkedin={this.state.linkedin} src={Images.linkedin} alt="linkedin" />
                            <SocialImg behance={this.state.behance} src={Images.behance} alt="behance" />
                        </IconWrapper>                                                                                                         
                        <FlexWrapper>
                            <TextFieldWrapper>    
                                <Input add>
                                    <MuiThemeProvider>
                                        <TextField      
                                            ref={ (input) => {this.urlInput = input;}}                                    
                                            onChange={this.getUrl}                                                       
                                            floatingLabelText="https://"
                                            floatingLabelStyle={styles.floatingLabelStyle}  
                                            floatingLabelShrinkStyle={styles.floatingLabelShrinkStyle}                                
                                            underlineShow={false}
                                        />              
                                    </MuiThemeProvider>                         
                                </Input>                                            
                                <UnderLine add></UnderLine> 
                            </TextFieldWrapper>
                            { isValidate ? <AddButton active onClick={this.addUrl}>Add</AddButton> : <AddButton >Add</AddButton> }                            
                        </FlexWrapper>                     
                    </FieldWrapper>
                    <FieldWrapper>
                        <SubHeading>What's your current status?</SubHeading>                        
                        <ButtonWrapper>
                            <Button active={status === 1} onClick={() => this.getStatus(1)}>Active</Button>
                            <Button active={status === 2} onClick={() => this.getStatus(2)}>Passive</Button>
                            <Button active={status === 3} onClick={() => this.getStatus(3)}>It's complicated</Button>                                                                                                                
                            <Button active={status === 4} onClick={() => this.getStatus(4)}>Undecided<img src={Images.remove} alt="" /></Button>                    
                        </ButtonWrapper>
                    </FieldWrapper>
                    { isLoading ? <Navigation><ReactLoading type="spinningBubbles" color="#4cbf69" height='70' width='70' /></Navigation> :
                        <Navigation>
                            <PrevButton prev onClick={() => this.prevPageNavigation('/profile/talent/category')}><Img src={Images.leftArrow} alt="left" /></PrevButton>
                            <NavigationButton onClick={() => this.nextPageNavigation('/profile/talent/candidate')}>Submit<Img right src={Images.wRightArrow} alt="right" /></NavigationButton>                       
                        </Navigation>
                    }
                </Content>
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
            </Wrapper>
        )
    }
}

// Map state to props
const mapStateToProps = (state) => {
    const { locations, beverage, status, social } = state.talent
    return {        
        locations, beverage, status, social,
        profileId: state.auth.profileId
    }
}

// Map action to props
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getSubmitionData,
            postSubmitionData
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Submition)