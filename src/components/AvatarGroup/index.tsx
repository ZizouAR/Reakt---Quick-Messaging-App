import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Avatar from '../Avatar';

const enum positions {
    absolute = "absolute",
    relative = "relative"
}

export default function AvatarGroup({ position = positions.absolute, max = 3, onPress}: any) {
    const [pos, setPos] = useState(position);


    const numbers = [
        "https://media-exp1.licdn.com/dms/image/C4D03AQGbJT0RhLAJRA/profile-displayphoto-shrink_800_800/0/1552228251838?e=1652918400&v=beta&t=8lJ_jDhBR0X0i3p-tNxXVBO5_B-Cg0hyc_rGR8qF7bA",
        "https://media-exp1.licdn.com/dms/image/C5603AQEBQI1nWZxKrQ/profile-displayphoto-shrink_800_800/0/1585423405508?e=1652918400&v=beta&t=kMejHzpqdUP8lyMkjtPyz_GcVC68fmaGRFGARLztcvg",
        "https://media-exp1.licdn.com/dms/image/C4E03AQHSad0h6j9TlA/profile-displayphoto-shrink_800_800/0/1612870024633?e=1652918400&v=beta&t=rDMFT0JcdXF-5JXNhS4h6M3uiWvPi5IOTcrWJEK6JgQ",
        "https://media-exp1.licdn.com/dms/image/C4E03AQHSad0h6j9TlA/profile-displayphoto-shrink_800_800/0/1612870024633?e=1652918400&v=beta&t=rDMFT0JcdXF-5JXNhS4h6M3uiWvPi5IOTcrWJEK6JgQ",
        "https://media-exp1.licdn.com/dms/image/C4E03AQHSad0h6j9TlA/profile-displayphoto-shrink_800_800/0/1612870024633?e=1652918400&v=beta&t=rDMFT0JcdXF-5JXNhS4h6M3uiWvPi5IOTcrWJEK6JgQ",
        "https://media-exp1.licdn.com/dms/image/C4E03AQHSad0h6j9TlA/profile-displayphoto-shrink_800_800/0/1612870024633?e=1652918400&v=beta&t=rDMFT0JcdXF-5JXNhS4h6M3uiWvPi5IOTcrWJEK6JgQ"
    ];

    let left = 0;


    const expand = () => {
        console.log("expanding")
        if (pos == positions.absolute) setPos(positions.relative);
        if (pos == positions.relative) setPos(positions.absolute);
    }


    return (
           <TouchableOpacity  onPress={onPress} style={{flex: 1, flexDirection: "row", height: 38}}>
                {numbers.map(function (profile, i) {
                    position = pos;
                    if (i < max) {

                        if (i > 0) left += 28;
                        if (position == positions.relative) left = 0;

                        return (
                            <View style={{ position, left }}>
                                <Avatar size={38} uri={profile} />
                            </View>
                        )
                    }
                })}

                {position == positions.absolute &&
                    <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#F6F5FC", position, left: left + 28, width: 38, height: 38, borderRadius: 19 }}>
                        <Text style={{ fontSize: 16, color: "#696969" }}>+{numbers.length - max}</Text>
                    </View>
                }
            </TouchableOpacity>

    )
};