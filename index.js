    /*
    ** Watch_Face_Editor tool v 17.1
    ** watchface js version v2.1.1
    ** Copyright © SashaCX75. All Rights Reserved
    */
   
    try {
    (() => {
        //start of ignored block
        const __$$app$$__ = __$$hmAppManager$$__.currentApp;
        function getApp() {
            return __$$app$$__.app;
        }
        function getCurrentPage() {
            return __$$app$$__.current && __$$app$$__.current.module;
        }
        const __$$module$$__ = __$$app$$__.current;
        const h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__));
        const {px} = __$$app$$__.__globals__;
        //const logger = Logger.getLogger('watchface_SashaCX75');
        const logger = DeviceRuntimeCore.HmLogger.getLogger('watchface_SashaCX75')
        //end of ignored block

        //dynamic modify start

        
        let normal_background_bg_img = ''
        let normal_weather_image_progress_img_level = ''
        let normal_temperature_current_text_img = ''
        let normal_pai_linear_scale = ''
        let normal_pai_weekly_text_font = ''
        let normal_widget_text_1 = ''
        let normal_heart_rate_text_font = ''
        let normal_hrv_current_text_font = ''
        let normal_bio_charge_text_text_img = ''
        let normal_training_load_text_text_img = ''
        let normal_stand_current_text_img = ''
        let normal_distance_text_text_img = ''
        let normal_distance_text_separator_img = ''
        let normal_step_current_text_img = ''
        let normal_step_current_separator_img = ''
        let normal_battery_text_text_img = ''
        let normal_battery_image_progress_img_level = ''
        let normal_date_img_date_month = ''
        let normal_date_img_date_week_img = ''
        let normal_date_img_date_day = ''
        let normal_digital_clock_img_time = ''
        let idle_background_bg_img = ''
        let idle_weather_image_progress_img_level = ''
        let idle_temperature_current_text_img = ''
        let idle_pai_icon_img = ''
        let idle_pai_weekly_text_font = ''
        let idle_heart_rate_text_font = ''
        let idle_hrv_current_text_font = ''
        let idle_bio_charge_text_text_img = ''
        let idle_training_load_text_text_img = ''
        let idle_stand_current_text_img = ''
        let idle_distance_text_text_img = ''
        let idle_distance_text_separator_img = ''
        let idle_step_current_text_img = ''
        let idle_step_current_separator_img = ''
        let idle_battery_text_text_img = ''
        let idle_battery_image_progress_img_level = ''
        let idle_date_img_date_month = ''
        let idle_date_img_date_week_img = ''
        let idle_date_img_date_day = ''
        let idle_digital_clock_img_time = ''


        //dynamic modify end

        __$$module$$__.module = DeviceRuntimeCore.WatchFace({
            init_view() {
                //dynamic modify start
                    
                
            // FontName: Roboto-Black.ttf; FontSize: 38
            hmUI.createWidget(hmUI.widget.TEXT, {
              x: 478,
              y: 478,
              w: 520,
              h: 55,
              text_size: 38,
              char_space: 0,
              line_space: 0,
              font: 'fonts/Roboto-Black.ttf',
              color: 0xFFFFFFFF,
              align_h: hmUI.align.RIGHT,
              align_v: hmUI.align.TOP,
              text_style: hmUI.text_style.ELLIPSIS,
              text: "0123456789 _-.,:;`'%°\\/",
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            console.log('Watch_Face.ScreenNormal');
            normal_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 480,
              h: 480,
              src: 'background.png',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_weather_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 256,
              y: 68,
              image_array: ["weat_0.png","weat_1.png","weat_2.png","weat_3.png","weat_4.png","weat_5.png","weat_6.png","weat_7.png","weat_8.png","weat_9.png","weat_10.png","weat_11.png","weat_12.png","weat_13.png","weat_14.png","weat_15.png","weat_16.png","weat_17.png","weat_18.png","weat_19.png","weat_20.png","weat_21.png","weat_22.png","weat_23.png","weat_24.png","weat_25.png","weat_26.png","weat_27.png","weat_28.png"],
              image_length: 29,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_temperature_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 281,
              y: 91,
              font_array: ["50.png","51.png","52.png","53.png","54.png","55.png","56.png","57.png","58.png","59.png"],
              padding: false,
              h_space: 0,
              unit_sc: 'du.png',
              unit_tc: 'du.png',
              unit_en: 'du.png',
              negative_image: 'fu.png',
              invalid_image: 'null.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            let screenType = hmSetting.getScreenType();
            if (screenType != hmSetting.screen_type.AOD) {
              normal_pai_linear_scale = hmUI.createWidget(hmUI.widget.FILL_RECT);
            };

            // normal_pai_linear_scale = hmUI.createWidget(hmUI.widget.Linear_Scale, {
              // start_x: 149,
              // start_y: 107,
              // color: 0xFF35CDFF,
              // lenght: -39,
              // line_width: 9,
              // line_cap: Flat,
              // vertical: True,
              // mirror: False,
              // inversion: False,
              // alpha: 255,
              // type: hmUI.data_type.PAI_WEEKLY,
              // show_level: hmUI.show_level.ONLY_NORMAL,
            // });
            
            const pai = hmSensor.createSensor(hmSensor.id.PAI);
            pai.addEventListener(hmSensor.event.CHANGE, function() {
              scale_call();
            });

            normal_pai_weekly_text_font = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
              x: -6,
              y: -6,
              w: 492,
              h: 492,
              text_size: 38,
              char_space: 0,
              font: 'fonts/Roboto-Black.ttf',
              color: 0xFFFFFFFF,
              // use_text_circle: true,
              start_angle: 2,
              end_angle: 20,
              mode: 0,
              // radius: 246,
              align_h: hmUI.align.RIGHT,
              type: hmUI.data_type.PAI_WEEKLY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_widget_text_1 = hmUI.createWidget(hmUI.widget.TEXT, {
              x: -6,
              y: -6,
              w: 492,
              h: 492,
              text_size: 38,
              char_space: 0,
              font: 'fonts/Roboto-Black.ttf',
              color: 0xFF3C5D73,
              // use_text_circle: true,
              start_angle: -16,
              end_angle: 0,
              mode: 0,
              // radius: 246,
              align_h: hmUI.align.LEFT,
              text: 'PAI',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_heart_rate_text_font = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
              x: -6,
              y: -6,
              w: 492,
              h: 492,
              text_size: 38,
              char_space: 0,
              font: 'fonts/Roboto-Black.ttf',
              color: 0xFFFFFFFF,
              // use_text_circle: true,
              start_angle: 123,
              end_angle: 141,
              mode: 1,
              // radius: 246,
              align_h: hmUI.align.RIGHT,
              padding: true,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_hrv_current_text_font = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
              x: -6,
              y: -6,
              w: 492,
              h: 492,
              text_size: 38,
              char_space: 0,
              font: 'fonts/Roboto-Black.ttf',
              color: 0xFFFFFFFF,
              // use_text_circle: true,
              start_angle: 41,
              end_angle: 58,
              mode: 0,
              // radius: 246,
              align_h: hmUI.align.RIGHT,
              type: hmUI.data_type.HRV,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_bio_charge_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 292,
              y: 336,
              font_array: ["40.png","41.png","42.png","43.png","44.png","45.png","46.png","47.png","48.png","49.png"],
              padding: false,
              h_space: 0,
              invalid_image: 'null_blue.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.BIO_CHARGE,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_training_load_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 376,
              y: 286,
              font_array: ["30.png","31.png","32.png","33.png","34.png","35.png","36.png","37.png","38.png","39.png"],
              padding: false,
              h_space: 0,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.TRAINING_LOAD,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_stand_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 359,
              y: 203,
              font_array: ["30.png","31.png","32.png","33.png","34.png","35.png","36.png","37.png","38.png","39.png"],
              padding: false,
              h_space: 0,
              unit_sc: 'h.png',
              unit_tc: 'h.png',
              unit_en: 'h.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STAND,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 98,
              y: 306,
              font_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              padding: false,
              h_space: 0,
              unit_sc: 'km.png',
              unit_tc: 'km.png',
              unit_en: 'km.png',
              dot_image: 'dot_s.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.DISTANCE,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_distance_text_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 77,
              y: 306,
              src: 'ic_dist.png',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 98,
              y: 340,
              font_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              padding: false,
              h_space: 0,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_current_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 77,
              y: 340,
              src: 'ic_step.png',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 98,
              y: 374,
              font_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              padding: false,
              h_space: 0,
              unit_sc: 'percent.png',
              unit_tc: 'percent.png',
              unit_en: 'percent.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_battery_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 77,
              y: 374,
              image_array: ["batt_1.png","batt_2.png","batt_3.png","batt_4.png","batt_5.png","batt_6.png","batt_7.png","batt_8.png"],
              image_length: 8,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_month = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              month_startX: 101,
              month_startY: 120,
              month_sc_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              month_tc_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              month_en_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              month_zero: 1,
              month_space: 0,
              month_align: hmUI.align.LEFT,
              month_is_character: false,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 66,
              y: 88,
              week_en: ["week_1.png","week_2.png","week_3.png","week_4.png","week_5.png","week_6.png","week_7.png"],
              week_tc: ["week_1.png","week_2.png","week_3.png","week_4.png","week_5.png","week_6.png","week_7.png"],
              week_sc: ["week_1.png","week_2.png","week_3.png","week_4.png","week_5.png","week_6.png","week_7.png"],
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              day_startX: 65,
              day_startY: 120,
              day_sc_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              day_tc_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              day_en_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              day_zero: 1,
              day_space: 0,
              day_align: hmUI.align.LEFT,
              day_is_character: false,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 14,
              hour_startY: 178,
              hour_array: ["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"],
              hour_zero: 1,
              hour_space: 2,
              hour_angle: 0,
              hour_align: hmUI.align.LEFT,

              minute_startX: 191,
              minute_startY: 178,
              minute_array: ["10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png"],
              minute_zero: 1,
              minute_space: 2,
              minute_angle: 0,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONLY_NORMAL,
            });


            console.log('Watch_Face.ScreenAOD');
            idle_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 480,
              h: 480,
              src: 'backgroundaod.png',
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_weather_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 256,
              y: 68,
              image_array: ["weat_0.png","weat_1.png","weat_2.png","weat_3.png","weat_4.png","weat_5.png","weat_6.png","weat_7.png","weat_8.png","weat_9.png","weat_10.png","weat_11.png","weat_12.png","weat_13.png","weat_14.png","weat_15.png","weat_16.png","weat_17.png","weat_18.png","weat_19.png","weat_20.png","weat_21.png","weat_22.png","weat_23.png","weat_24.png","weat_25.png","weat_26.png","weat_27.png","weat_28.png"],
              image_length: 29,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_temperature_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 281,
              y: 91,
              font_array: ["50.png","51.png","52.png","53.png","54.png","55.png","56.png","57.png","58.png","59.png"],
              padding: false,
              h_space: 0,
              unit_sc: 'du.png',
              unit_tc: 'du.png',
              unit_en: 'du.png',
              negative_image: 'fu.png',
              invalid_image: 'null.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_pai_icon_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 225,
              y: 58,
              src: 'arrow.png',
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_pai_weekly_text_font = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
              x: -6,
              y: -6,
              w: 492,
              h: 492,
              text_size: 38,
              char_space: 0,
              font: 'fonts/Roboto-Black.ttf',
              color: 0xFFFFFFFF,
              // use_text_circle: true,
              start_angle: 2,
              end_angle: 20,
              mode: 0,
              // radius: 246,
              align_h: hmUI.align.RIGHT,
              type: hmUI.data_type.PAI_WEEKLY,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_heart_rate_text_font = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
              x: -6,
              y: -6,
              w: 492,
              h: 492,
              text_size: 38,
              char_space: 0,
              font: 'fonts/Roboto-Black.ttf',
              color: 0xFFFFFFFF,
              // use_text_circle: true,
              start_angle: 123,
              end_angle: 141,
              mode: 1,
              // radius: 246,
              align_h: hmUI.align.RIGHT,
              padding: true,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_hrv_current_text_font = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
              x: -6,
              y: -6,
              w: 492,
              h: 492,
              text_size: 38,
              char_space: 0,
              font: 'fonts/Roboto-Black.ttf',
              color: 0xFFFFFFFF,
              // use_text_circle: true,
              start_angle: 41,
              end_angle: 58,
              mode: 0,
              // radius: 246,
              align_h: hmUI.align.RIGHT,
              type: hmUI.data_type.HRV,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_bio_charge_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 292,
              y: 336,
              font_array: ["40.png","41.png","42.png","43.png","44.png","45.png","46.png","47.png","48.png","49.png"],
              padding: false,
              h_space: 0,
              invalid_image: 'null_blue.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.BIO_CHARGE,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_training_load_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 376,
              y: 286,
              font_array: ["30.png","31.png","32.png","33.png","34.png","35.png","36.png","37.png","38.png","39.png"],
              padding: false,
              h_space: 0,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.TRAINING_LOAD,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_stand_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 359,
              y: 203,
              font_array: ["30.png","31.png","32.png","33.png","34.png","35.png","36.png","37.png","38.png","39.png"],
              padding: false,
              h_space: 0,
              unit_sc: 'h.png',
              unit_tc: 'h.png',
              unit_en: 'h.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STAND,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 98,
              y: 306,
              font_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              padding: false,
              h_space: 0,
              unit_sc: 'km.png',
              unit_tc: 'km.png',
              unit_en: 'km.png',
              dot_image: 'dot_s.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.DISTANCE,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_distance_text_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 77,
              y: 306,
              src: 'ic_dist.png',
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 98,
              y: 340,
              font_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              padding: false,
              h_space: 0,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_step_current_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 77,
              y: 340,
              src: 'ic_step.png',
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 98,
              y: 374,
              font_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              padding: false,
              h_space: 0,
              unit_sc: 'percent.png',
              unit_tc: 'percent.png',
              unit_en: 'percent.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_battery_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 77,
              y: 374,
              image_array: ["batt_1.png","batt_2.png","batt_3.png","batt_4.png","batt_5.png","batt_6.png","batt_7.png","batt_8.png"],
              image_length: 8,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_date_img_date_month = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              month_startX: 101,
              month_startY: 120,
              month_sc_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              month_tc_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              month_en_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              month_zero: 1,
              month_space: 0,
              month_align: hmUI.align.LEFT,
              month_is_character: false,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 66,
              y: 88,
              week_en: ["week_1.png","week_2.png","week_3.png","week_4.png","week_5.png","week_6.png","week_7.png"],
              week_tc: ["week_1.png","week_2.png","week_3.png","week_4.png","week_5.png","week_6.png","week_7.png"],
              week_sc: ["week_1.png","week_2.png","week_3.png","week_4.png","week_5.png","week_6.png","week_7.png"],
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              day_startX: 65,
              day_startY: 120,
              day_sc_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              day_tc_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              day_en_array: ["20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png"],
              day_zero: 1,
              day_space: 0,
              day_align: hmUI.align.LEFT,
              day_is_character: false,
              show_level: hmUI.show_level.ONLY_AOD,
            });

            idle_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 14,
              hour_startY: 178,
              hour_array: ["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"],
              hour_zero: 1,
              hour_space: 2,
              hour_angle: 0,
              hour_align: hmUI.align.LEFT,

              minute_startX: 191,
              minute_startY: 178,
              minute_array: ["10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png"],
              minute_zero: 1,
              minute_space: 2,
              minute_angle: 0,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONLY_AOD,
            });

            function scale_call() {
              console.log('scale_call()');

                console.log('update scales PAI');
                
                let valuePAI = pai.totalpai;
                let targetPAI = 100;
                let progressPAI = valuePAI/targetPAI;
                if (progressPAI > 1) progressPAI = 1;
                let progress_ls_normal_pai = progressPAI;

                if (screenType != hmSetting.screen_type.AOD) {

                  // normal_pai_linear_scale
                  // initial parameters
                  let start_x_normal_pai = 149;
                  let start_y_normal_pai = 107;
                  let lenght_ls_normal_pai = -39;
                  let line_width_ls_normal_pai = 9;
                  let color_ls_normal_pai = 0xFF35CDFF;
                  
                  // calculated parameters
                  let start_x_normal_pai_draw = start_x_normal_pai;
                  let start_y_normal_pai_draw = start_y_normal_pai;
                  lenght_ls_normal_pai = lenght_ls_normal_pai * progress_ls_normal_pai;
                  let lenght_ls_normal_pai_draw = line_width_ls_normal_pai;
                  let line_width_ls_normal_pai_draw = lenght_ls_normal_pai;
                  if (lenght_ls_normal_pai < 0){
                    line_width_ls_normal_pai_draw = -lenght_ls_normal_pai;
                    start_y_normal_pai_draw = start_y_normal_pai_draw - line_width_ls_normal_pai_draw;
                  };
                  
                  normal_pai_linear_scale.setProperty(hmUI.prop.MORE, {
                    x: start_x_normal_pai_draw,
                    y: start_y_normal_pai_draw,
                    w: lenght_ls_normal_pai_draw,
                    h: line_width_ls_normal_pai_draw,
                    color: color_ls_normal_pai,
                  });
                };

            };

            const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
              resume_call: (function () {
                console.log('resume_call()');
                scale_call();
              }),
            });

                //dynamic modify end
            },
            onInit() {
                logger.log('index page.js on init invoke');
            },
            build() {
                this.init_view();
                logger.log('index page.js on ready invoke');
            },
            onDestroy() {
                logger.log('index page.js on destroy invoke');
            }
        });
        ;
    })();
} catch (e) {
    console.log('Mini Program Error', e);
    e && e.stack && e.stack.split(/\n/).forEach(i => console.log('error stack', i));
    ;
}