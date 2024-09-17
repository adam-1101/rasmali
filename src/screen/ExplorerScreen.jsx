import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const ExplorerScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* Top Section with Gold Image */}
            <Image source={require('../assets/top-gold.png')} style={styles.topImage} />
            <View style={styles.logotop}>
                <Image source={require("../assets/logo.png")} style={styles.logo}/>
            </View>

            {/* Search Bar and Filter Icon */}
            <View style={styles.searchContainer}>
                <TextInput 
                    style={styles.searchInput} 
                    placeholder="Search" 
                    placeholderTextColor="#b29a04"
                />
                <TouchableOpacity style={styles.searchIcon}>
                    <Image source={require('../assets/search-icon.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton} onPress={() => console.log('Filter pressed')}>
                    <Image source={require('../assets/filter-icon.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.sectionTitle}>Most Popular</Text>

                <View style={styles.cardContainer}>
                    {/* Card 1 */}
                    <View style={styles.card}>
                        <Image source={require('../assets/al-imrane.png')} style={styles.cardImage} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Groupe Al Imrane</Text>
                            <Text style={styles.cardSubtitle}>Travel made simple with a home away from home anywhere you need it.</Text>
                            <TouchableOpacity>
                                <Text style={styles.investText}>Invest →</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Card 2 */}  
                    <View style={styles.card}>
                        <Image source={require('../assets/al-imrane.png')} style={styles.cardImage} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Panda Sushi</Text>
                            <Text style={styles.cardSubtitle}>Food delivery made easy.</Text>
                            <TouchableOpacity>
                                <Text style={styles.investText}>Invest →</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Global Companies Section */}
                <Text style={styles.sectionTitle}>Global Companies</Text>

                <View style={styles.cardContainer}>
                    {/* Card 1 */}
                    <View style={styles.card}>
                        <Image source={require('../assets/al-imrane.png')} style={styles.cardImage} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Tesla</Text>
                            <Text style={styles.cardSubtitle}>Most sleek and innovative electric cars in the world.</Text>
                            <TouchableOpacity>
                                <Text style={styles.investText}>Invest →</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Card 2 */}
                    <View style={styles.card}>
                        <Image source={require('../assets/al-imrane.png')} style={styles.cardImage} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Calm</Text>
                            <Text style={styles.cardSubtitle}>App that makes it easy to meditate and make you calm.</Text>
                            <TouchableOpacity>
                                <Text style={styles.investText}>Invest →</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomNavigation}>
                <TouchableOpacity>
                    <Image source={require('../assets/search-icon.png')} style={styles.navIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/investements-icon.png')} style={styles.navIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/profile-icon.png')} style={styles.navIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    logotop: {
      position: 'absolute', 
      top: 10,              
      left: 10,          
    },
    logo: {
      width: 170,           
      height: 170,          
      resizeMode: 'contain', 
    },
    topImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    searchContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: -40,
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        paddingHorizontal: 20,
        height: 50,
    },
    searchIcon: {
        position: 'absolute',
        right: 90,
        top: 13, // Vertically aligns the icon with the search input
    },
    filterButton: {
        height: 50, // Same height as the search input
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#b29a04',
        marginVertical: 15,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    card: {
        width: '48%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
    },
    cardContent: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    cardSubtitle: {
        fontSize: 12,
        color: '#666',
        marginVertical: 5,
    },
    investText: {
        color: '#b29a04',
        fontWeight: 'bold',
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    navIcon: {
        width: 30,
        height: 30,
    },
});

export default ExplorerScreen;
