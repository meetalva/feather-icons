"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Icon = require('react-feather');
var StrokeWidth;
(function (StrokeWidth) {
    /** @name Narrow  */
    StrokeWidth["strokeNarrow"] = "1px";
    /** @name Medium  */
    StrokeWidth["strokeMedium"] = "2px";
    /** @name Thick  */
    StrokeWidth["strokeThick"] = "3px";
})(StrokeWidth = exports.StrokeWidth || (exports.StrokeWidth = {}));
/**
 * @name Feather Icon
 * @icon Feather
 */
exports.FeatherIcons = function (props) {
    var IconImage = Icon[props.name];
    return (React.createElement(IconImage, { style: {
            color: props.color,
            width: props.size,
            height: props.size,
            strokeWidth: props.StrokeWidth
        } }));
};
var FeatherIcon;
(function (FeatherIcon) {
    FeatherIcon["Activity"] = "Activity";
    FeatherIcon["Airplay"] = "Airplay";
    FeatherIcon["AlertCircle"] = "AlertCircle";
    FeatherIcon["AlertOctagon"] = "AlertOctagon";
    FeatherIcon["AlertTriangle"] = "AlertTriangle";
    FeatherIcon["AlignCenter"] = "AlignCenter";
    FeatherIcon["AlignJustify"] = "AlignJustify";
    FeatherIcon["AlignLeft"] = "AlignLeft";
    FeatherIcon["AlignRight"] = "AlignRight";
    FeatherIcon["Anchor"] = "Anchor";
    FeatherIcon["Aperture"] = "Aperture";
    FeatherIcon["Archive"] = "Archive";
    FeatherIcon["ArrowDownCircle"] = "ArrowDownCircle";
    FeatherIcon["ArrowDownLeft"] = "ArrowDownLeft";
    FeatherIcon["ArrowDownRight"] = "ArrowDownRight";
    FeatherIcon["ArrowDown"] = "ArrowDown";
    FeatherIcon["ArrowLeftCircle"] = "ArrowLeftCircle";
    FeatherIcon["ArrowLeft"] = "ArrowLeft";
    FeatherIcon["ArrowRightCircle"] = "ArrowRightCircle";
    FeatherIcon["ArrowRight"] = "ArrowRight";
    FeatherIcon["ArrowUpCircle"] = "ArrowUpCircle";
    FeatherIcon["ArrowUpLeft"] = "ArrowUpLeft";
    FeatherIcon["ArrowUpRight"] = "ArrowUpRight";
    FeatherIcon["ArrowUp"] = "ArrowUp";
    FeatherIcon["AtSign"] = "AtSign";
    FeatherIcon["Award"] = "Award";
    FeatherIcon["BarChart2"] = "BarChart2";
    FeatherIcon["BarChart"] = "BarChart";
    FeatherIcon["BatteryCharging"] = "BatteryCharging";
    FeatherIcon["Battery"] = "Battery";
    FeatherIcon["BellOff"] = "BellOff";
    FeatherIcon["Bell"] = "Bell";
    FeatherIcon["Bluetooth"] = "Bluetooth";
    FeatherIcon["Bold"] = "Bold";
    FeatherIcon["BookOpen"] = "BookOpen";
    FeatherIcon["Book"] = "Book";
    FeatherIcon["Bookmark"] = "Bookmark";
    FeatherIcon["Box"] = "Box";
    FeatherIcon["Briefcase"] = "Briefcase";
    FeatherIcon["Calendar"] = "Calendar";
    FeatherIcon["CameraOff"] = "CameraOff";
    FeatherIcon["Camera"] = "Camera";
    FeatherIcon["Cast"] = "Cast";
    FeatherIcon["CheckCircle"] = "CheckCircle";
    FeatherIcon["CheckSquare"] = "CheckSquare";
    FeatherIcon["Check"] = "Check";
    FeatherIcon["ChevronDown"] = "ChevronDown";
    FeatherIcon["ChevronLeft"] = "ChevronLeft";
    FeatherIcon["ChevronRight"] = "ChevronRight";
    FeatherIcon["ChevronUp"] = "ChevronUp";
    FeatherIcon["ChevronsDown"] = "ChevronsDown";
    FeatherIcon["ChevronsLeft"] = "ChevronsLeft";
    FeatherIcon["ChevronsRight"] = "ChevronsRight";
    FeatherIcon["ChevronsUp"] = "ChevronsUp";
    FeatherIcon["Chrome"] = "Chrome";
    FeatherIcon["Circle"] = "Circle";
    FeatherIcon["Clipboard"] = "Clipboard";
    FeatherIcon["Clock"] = "Clock";
    FeatherIcon["CloudDrizzle"] = "CloudDrizzle";
    FeatherIcon["CloudLightning"] = "CloudLightning";
    FeatherIcon["CloudOff"] = "CloudOff";
    FeatherIcon["CloudRain"] = "CloudRain";
    FeatherIcon["CloudSnow"] = "CloudSnow";
    FeatherIcon["Cloud"] = "Cloud";
    FeatherIcon["Code"] = "Code";
    FeatherIcon["Codepen"] = "Codepen";
    FeatherIcon["Coffee"] = "Coffee";
    FeatherIcon["Command"] = "Command";
    FeatherIcon["Compass"] = "Compass";
    FeatherIcon["Copy"] = "Copy";
    FeatherIcon["CornerDownLeft"] = "CornerDownLeft";
    FeatherIcon["CornerDownRight"] = "CornerDownRight";
    FeatherIcon["CornerLeftDown"] = "CornerLeftDown";
    FeatherIcon["CornerLeftUp"] = "CornerLeftUp";
    FeatherIcon["CornerRightDown"] = "CornerRightDown";
    FeatherIcon["CornerRightUp"] = "CornerRightUp";
    FeatherIcon["CornerUpLeft"] = "CornerUpLeft";
    FeatherIcon["CornerUpRight"] = "CornerUpRight";
    FeatherIcon["Cpu"] = "Cpu";
    FeatherIcon["CreditCard"] = "CreditCard";
    FeatherIcon["Crop"] = "Crop";
    FeatherIcon["Crosshair"] = "Crosshair";
    FeatherIcon["Database"] = "Database";
    FeatherIcon["Delete"] = "Delete";
    FeatherIcon["Disc"] = "Disc";
    FeatherIcon["DollarSign"] = "DollarSign";
    FeatherIcon["DownloadCloud"] = "DownloadCloud";
    FeatherIcon["Download"] = "Download";
    FeatherIcon["Droplet"] = "Droplet";
    FeatherIcon["Edit2"] = "Edit2";
    FeatherIcon["Edit3"] = "Edit3";
    FeatherIcon["Edit"] = "Edit";
    FeatherIcon["ExternalLink"] = "ExternalLink";
    FeatherIcon["EyeOff"] = "EyeOff";
    FeatherIcon["Eye"] = "Eye";
    FeatherIcon["Facebook"] = "Facebook";
    FeatherIcon["FastForward"] = "FastForward";
    FeatherIcon["Feather"] = "Feather";
    FeatherIcon["FileMinus"] = "FileMinus";
    FeatherIcon["FilePlus"] = "FilePlus";
    FeatherIcon["FileText"] = "FileText";
    FeatherIcon["File"] = "File";
    FeatherIcon["Film"] = "Film";
    FeatherIcon["Filter"] = "Filter";
    FeatherIcon["Flag"] = "Flag";
    FeatherIcon["FolderMinus"] = "FolderMinus";
    FeatherIcon["FolderPlus"] = "FolderPlus";
    FeatherIcon["Folder"] = "Folder";
    FeatherIcon["Frown"] = "Frown";
    FeatherIcon["Gift"] = "Gift";
    FeatherIcon["GitBranch"] = "GitBranch";
    FeatherIcon["GitCommit"] = "GitCommit";
    FeatherIcon["GitMerge"] = "GitMerge";
    FeatherIcon["GitPullRequest"] = "GitPullRequest";
    FeatherIcon["GitHub"] = "GitHub";
    FeatherIcon["Gitlab"] = "Gitlab";
    FeatherIcon["Globe"] = "Globe";
    FeatherIcon["Grid"] = "Grid";
    FeatherIcon["HardDrive"] = "HardDrive";
    FeatherIcon["Hash"] = "Hash";
    FeatherIcon["Headphones"] = "Headphones";
    FeatherIcon["Heart"] = "Heart";
    FeatherIcon["HelpCircle"] = "HelpCircle";
    FeatherIcon["Home"] = "Home";
    FeatherIcon["Image"] = "Image";
    FeatherIcon["Inbox"] = "Inbox";
    FeatherIcon["Info"] = "Info";
    FeatherIcon["Instagram"] = "Instagram";
    FeatherIcon["Italic"] = "Italic";
    FeatherIcon["Key"] = "Key";
    FeatherIcon["Layers"] = "Layers";
    FeatherIcon["Layout"] = "Layout";
    FeatherIcon["LifeBuoy"] = "LifeBuoy";
    FeatherIcon["Link2"] = "Link2";
    FeatherIcon["Link"] = "Link";
    FeatherIcon["Linkedin"] = "Linkedin";
    FeatherIcon["List"] = "List";
    FeatherIcon["Loader"] = "Loader";
    FeatherIcon["Lock"] = "Lock";
    FeatherIcon["LogIn"] = "LogIn";
    FeatherIcon["LogOut"] = "LogOut";
    FeatherIcon["Mail"] = "Mail";
    FeatherIcon["MapPin"] = "MapPin";
    FeatherIcon["Map"] = "Map";
    FeatherIcon["Maximize2"] = "Maximize2";
    FeatherIcon["Maximize"] = "Maximize";
    FeatherIcon["Meh"] = "Meh";
    FeatherIcon["Menu"] = "Menu";
    FeatherIcon["MessageCircle"] = "MessageCircle";
    FeatherIcon["MessageSquare"] = "MessageSquare";
    FeatherIcon["MicOff"] = "MicOff";
    FeatherIcon["Mic"] = "Mic";
    FeatherIcon["Minimize2"] = "Minimize2";
    FeatherIcon["Minimize"] = "Minimize";
    FeatherIcon["MinusCircle"] = "MinusCircle";
    FeatherIcon["MinusSquare"] = "MinusSquare";
    FeatherIcon["Minus"] = "Minus";
    FeatherIcon["Monitor"] = "Monitor";
    FeatherIcon["Moon"] = "Moon";
    FeatherIcon["MoreHorizontal"] = "MoreHorizontal";
    FeatherIcon["MoreVertical"] = "MoreVertical";
    FeatherIcon["Move"] = "Move";
    FeatherIcon["Music"] = "Music";
    FeatherIcon["Navigation2"] = "Navigation2";
    FeatherIcon["Navigation"] = "Navigation";
    FeatherIcon["Octagon"] = "Octagon";
    FeatherIcon["Package"] = "Package";
    FeatherIcon["Paperclip"] = "Paperclip";
    FeatherIcon["PauseCircle"] = "PauseCircle";
    FeatherIcon["Pause"] = "Pause";
    FeatherIcon["Percent"] = "Percent";
    FeatherIcon["PhoneCall"] = "PhoneCall";
    FeatherIcon["PhoneForwarded"] = "PhoneForwarded";
    FeatherIcon["PhoneIncoming"] = "PhoneIncoming";
    FeatherIcon["PhoneMissed"] = "PhoneMissed";
    FeatherIcon["PhoneOff"] = "PhoneOff";
    FeatherIcon["PhoneOutgoing"] = "PhoneOutgoing";
    FeatherIcon["Phone"] = "Phone";
    FeatherIcon["PieChart"] = "PieChart";
    FeatherIcon["PlayCircle"] = "PlayCircle";
    FeatherIcon["Play"] = "Play";
    FeatherIcon["PlusCircle"] = "PlusCircle";
    FeatherIcon["PlusSquare"] = "PlusSquare";
    FeatherIcon["Plus"] = "Plus";
    FeatherIcon["Pocket"] = "Pocket";
    FeatherIcon["Power"] = "Power";
    FeatherIcon["Printer"] = "Printer";
    FeatherIcon["Radio"] = "Radio";
    FeatherIcon["RefreshCcw"] = "RefreshCcw";
    FeatherIcon["RefreshCw"] = "RefreshCw";
    FeatherIcon["Repeat"] = "Repeat";
    FeatherIcon["Rewind"] = "Rewind";
    FeatherIcon["RotateCcw"] = "RotateCcw";
    FeatherIcon["RotateCw"] = "RotateCw";
    FeatherIcon["Rss"] = "Rss";
    FeatherIcon["Save"] = "Save";
    FeatherIcon["Scissors"] = "Scissors";
    FeatherIcon["Search"] = "Search";
    FeatherIcon["Send"] = "Send";
    FeatherIcon["Server"] = "Server";
    FeatherIcon["Settings"] = "Settings";
    FeatherIcon["Share2"] = "Share2";
    FeatherIcon["Share"] = "Share";
    FeatherIcon["ShieldOff"] = "ShieldOff";
    FeatherIcon["Shield"] = "Shield";
    FeatherIcon["ShoppingBag"] = "ShoppingBag";
    FeatherIcon["ShoppingCart"] = "ShoppingCart";
    FeatherIcon["Shuffle"] = "Shuffle";
    FeatherIcon["Sidebar"] = "Sidebar";
    FeatherIcon["SkipBack"] = "SkipBack";
    FeatherIcon["SkipForward"] = "SkipForward";
    FeatherIcon["Slack"] = "Slack";
    FeatherIcon["Slash"] = "Slash";
    FeatherIcon["Sliders"] = "Sliders";
    FeatherIcon["Smartphone"] = "Smartphone";
    FeatherIcon["Smile"] = "Smile";
    FeatherIcon["Speaker"] = "Speaker";
    FeatherIcon["Square"] = "Square";
    FeatherIcon["Star"] = "Star";
    FeatherIcon["StopCircle"] = "StopCircle";
    FeatherIcon["Sun"] = "Sun";
    FeatherIcon["Sunrise"] = "Sunrise";
    FeatherIcon["Sunset"] = "Sunset";
    FeatherIcon["Tablet"] = "Tablet";
    FeatherIcon["Tag"] = "Tag";
    FeatherIcon["Target"] = "Target";
    FeatherIcon["Terminal"] = "Terminal";
    FeatherIcon["Thermometer"] = "Thermometer";
    FeatherIcon["ThumbsDown"] = "ThumbsDown";
    FeatherIcon["ThumbsUp"] = "ThumbsUp";
    FeatherIcon["ToggleLeft"] = "ToggleLeft";
    FeatherIcon["ToggleRight"] = "ToggleRight";
    FeatherIcon["Trash2"] = "Trash2";
    FeatherIcon["Trash"] = "Trash";
    FeatherIcon["Trello"] = "Trello";
    FeatherIcon["TrendingDown"] = "TrendingDown";
    FeatherIcon["TrendingUp"] = "TrendingUp";
    FeatherIcon["Triangle"] = "Triangle";
    FeatherIcon["Truck"] = "Truck";
    FeatherIcon["Tv"] = "Tv";
    FeatherIcon["Twitter"] = "Twitter";
    FeatherIcon["Type"] = "Type";
    FeatherIcon["Umbrella"] = "Umbrella";
    FeatherIcon["Underline"] = "Underline";
    FeatherIcon["Unlock"] = "Unlock";
    FeatherIcon["UploadCloud"] = "UploadCloud";
    FeatherIcon["Upload"] = "Upload";
    FeatherIcon["UserCheck"] = "UserCheck";
    FeatherIcon["UserMinus"] = "UserMinus";
    FeatherIcon["UserPlus"] = "UserPlus";
    FeatherIcon["UserX"] = "UserX";
    FeatherIcon["User"] = "User";
    FeatherIcon["Users"] = "Users";
    FeatherIcon["VideoOff"] = "VideoOff";
    FeatherIcon["Video"] = "Video";
    FeatherIcon["Voicemail"] = "Voicemail";
    FeatherIcon["Volume1"] = "Volume1";
    FeatherIcon["Volume2"] = "Volume2";
    FeatherIcon["VolumeX"] = "VolumeX";
    FeatherIcon["Volume"] = "Volume";
    FeatherIcon["Watch"] = "Watch";
    FeatherIcon["WifiOff"] = "WifiOff";
    FeatherIcon["Wifi"] = "Wifi";
    FeatherIcon["Wind"] = "Wind";
    FeatherIcon["XCircle"] = "XCircle";
    FeatherIcon["XSquare"] = "XSquare";
    FeatherIcon["X"] = "X";
    FeatherIcon["Youtube"] = "Youtube";
    FeatherIcon["ZapOff"] = "ZapOff";
    FeatherIcon["Zap"] = "Zap";
    FeatherIcon["ZoomIn"] = "ZoomIn";
    FeatherIcon["ZoomOu"] = "ZoomOut";
})(FeatherIcon = exports.FeatherIcon || (exports.FeatherIcon = {}));
//# sourceMappingURL=feather-icons.js.map