window.tyrano_lang = {
    word: {
        go_title: "タイトルに戻ります。よろしいですね？",
        exit_game: "ウィンドウを閉じて終了します。よろしいですね？",
        not_saved: "まだ、保存されているデータがありません",
        tag: "タグ",
        not_exists: "は存在しません",
        error: "エラーが発生しました。スクリプトを確認して下さい",
        label: "ラベル",
        label_double: "は同一シナリオファイル内に重複しています",
        error_occurred: "エラーが発生しました",
        save_file_violation_1: "セーブデータの移動を検知しました。信頼できるセーブデータでない場合、絶対に読み込まないでください。",
        save_file_violation_2: "セーブデータを読み込んでゲームを起動してもよろしいですか？",
        save_file_violation_3: "起動を中止しました。セーブデータを削除してもう一度、起動してください",
        double_start: "すでにゲームは起動済みです。２重起動はできません。",
        reload: "リロード",
        line: "{ line }行目",
    },

    error: {
        undefined_tag: "タグ「{ name }」は存在しません。",
        undefined_label: "ラベル「{ name }」は存在しません。",
        undefined_character: "指定されたキャラクター「{ name }」は定義されていません。[chara_new]で定義してください。",
        undefined_face: "指定されたキャラクター「{ name }」の表情「{ face }」は定義されていません。[chara_face]で定義してください。",
        undefined_character_parts: "指定されたキャラクター「{ name }」の差分パーツは定義されていません。[chara_layer]で定義してください。",
        undefined_keyframe: "指定されたキーフレームアニメーション「{ keyframe }」は定義されていません。[keyframe]で定義してください。",
        undefined_3d_model: "指定された3Dモデル「{ name }」は定義されていません。",
        preload_failure_sound:
            "音声ファイル「{ src }」が見つかりません。場所はフルパスで指定されていますか？\n\n(適切な例) ./data/bgm/my_bgm.mp3",
        preload_failure_image:
            "画像ファイル「{ src }」が見つかりません。場所はフルパスで指定されていますか？\n\n(適切な例) ./data/image/my_image.png",
        preload_failure_video:
            "動画ファイル「{ src }」が見つかりません。場所はフルパスで指定されていますか？\n\n(適切な例) ./data/video/my_video.mp4",
        invalid_keyframe: "キーフレームが無効な値です。",
        invalid_keyframe_percentage:
            'キーフレームに設定されているパーセンテージ「{ percentage }」は無効な値です。"0%"、"30%"のように指定してください。',
        error_in_iscript: "[iscript]の内部でエラーが発生しました。",
        missing_endif: "[if]のあとに[elsif][else][endif]のいずれかが見つかりません。または、[if]内のタグの数が多すぎます。",
        missing_endmacro: "[macro]のあとに[endmacro]が見つかりません。または、[macro]内のタグの数が多すぎます。",
        missing_endignore: "[ignore]のあとに[endignore]が見つかりません。または、[ignore]内の数が多すぎます。",
        missing_parameter: "タグ「{ tag }」にパラメーター「{ param }」は必須です。",
        if_and_endif_do_not_match: "[if]と[endif]の数が一致しません。",
        unsupported_extensions: "「{ ext }」はサポートしていないファイル形式です。",
    },

    warn: {
        duplicate_label:
            "ラベル「{ name }」は同一シナリオファイル内に重複しています。ラベル名は同一シナリオファイル内で重複しないようにしてください。",
    },

    novel: {
        file_menu_button_save: "menu_button_save.gif",
        file_menu_button_load: "menu_button_load.gif",
        file_menu_button_message_close: "menu_message_close.gif",
        file_menu_button_skip: "menu_button_skip.gif",
        file_menu_button_title: "menu_button_title.gif",
        file_menu_button_close: "menu_button_close.png",
        file_menu_bg: "menu_bg.jpg",
        file_save_bg: "menu_save_bg.jpg",
        file_load_bg: "menu_load_bg.jpg",
        file_button_menu: "button_menu.png",
        error_occurred: "error occurred",
    },
};
