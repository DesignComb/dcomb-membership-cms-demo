module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                //主要白色
                primary: {
                    0: '#FFFFFF',
                    100: '#F6F7F8',
                    200: '#E8E8E8',
                },
                //次要黑色(夜間模式)
                secondary: {
                    0: '#171D23',
                    100: '#212932',
                    200: '#353F4B',
                    300: '#47627B',
                    400: '#2E363F',
                    500: '#525E6B',
                    600: '#4d5661',
                    700: '#4A5B6B',
                },
                blue: {
                    0: '#0385B6',
                    1: '#2768BF',
                    2: '#4F93E3',
                },
              purple: {
                0: '#AF6AB3',
                1: '#A384CE',
              },
            },
            screens: {
                'lg': '968px',
                '3xl': '1792px'
            },
            borderWidth: {
                DEFAULT: '1px',
                '0': '0',
                '2': '2px',
                '3': '3px',
                '4': '4px',
                '6': '6px',
                '8': '8px',
            },
            letterSpacing: {
                6: '0.006em',
                10: '0.010em',
                15: '0.015em',
                20: '0.020em',
                25: '0.025em',
                30: '0.030em',
                40: '0.040em',
                80: '0.080em',
                125: '0.125em',
                150: '0.150em',
            },
            fontSize: {
                'headline-1': '2.06rem',
                'headline-2': '1.47rem',
                'headline-3': '1.24rem',
                'body-2': '0.88rem',
                'caption': '0.71rem',
                'overline': '0.59rem',
            },
            fontWeight: {
                'base': '400',
                'normal': '500'
            },
            boxShadow: {
                'normal': '0px 0px 10px 0px rgba(0,0,0,0.1)',
                'large': '0px 0px 20px rgba(0, 0, 0, 0.25)',
            },
            lineHeight: {
                '90': '5.29rem',
                '50': '2.94rem',
                '35': '2.06rem',
                '30': '1.76rem',
            },
            translate: {
                'bg': '10%',
            },
            scale: {
                '120': '1.2',
            }
        }
    }
}
